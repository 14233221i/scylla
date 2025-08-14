import { NextRequest, NextResponse } from 'next/server';
import { addContactToSheet } from '../../../../lib/google-sheets';
import { sendContactNotification } from '../../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    });

    // Add to Google Sheets (if configured)
    let sheetSuccess = false;
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        sheetSuccess = await addContactToSheet({ name, email, phone, message });
      } catch (error) {
        console.error('Google Sheets error:', error);
      }
    } else {
      console.log('Google Sheets not configured, skipping sheet update');
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      emailSuccess = await sendContactNotification({ name, email, phone, message });
    } catch (error) {
      console.error('Email error:', error);
    }

    // Return success if email was sent, or if we have the data logged
    const successMessage = 'Message sent successfully! We will get back to you soon.';
    
    if (emailSuccess) {
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    } else {
      // If email fails, still return success but log the issue
      console.warn('Email failed, but form was submitted and logged');
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 