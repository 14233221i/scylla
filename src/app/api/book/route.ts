import { NextRequest, NextResponse } from 'next/server';
import { addBookingToSheet } from '../../../../lib/google-sheets';
import { sendBookingNotification } from '../../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log the booking
    console.log('Appointment Booking:', {
      name,
      email,
      phone,
      date,
      time,
      timestamp: new Date().toISOString()
    });

    // Add to Google Sheets (if configured)
    let sheetSuccess = false;
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        sheetSuccess = await addBookingToSheet({ name, email, phone, date, time });
      } catch (error) {
        console.error('Google Sheets error:', error);
      }
    } else {
      console.log('Google Sheets not configured, skipping sheet update');
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      emailSuccess = await sendBookingNotification({ name, email, phone, date, time });
    } catch (error) {
      console.error('Email error:', error);
    }

    // Return success if email was sent, or if we have the data logged
    const successMessage = 'Appointment booked successfully! We will confirm your slot soon.';
    
    if (emailSuccess) {
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    } else {
      // If email fails, still return success but log the issue
      console.warn('Email failed, but booking was submitted and logged');
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment. Please try again.' },
      { status: 500 }
    );
  }
} 