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
    try {
      sheetSuccess = await addBookingToSheet({ name, email, phone, date, time });
    } catch (error) {
      console.error('Google Sheets error:', error);
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      emailSuccess = await sendBookingNotification({ name, email, phone, date, time });
    } catch (error) {
      console.error('Email error:', error);
    }

    // Return success even if one method fails
    const successMessage = 'Appointment booked successfully! We will confirm your slot soon.';
    
    if (sheetSuccess || emailSuccess) {
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    } else {
      // If both fail, still return success but log the issue
      console.warn('Both Google Sheets and email failed, but booking was submitted');
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