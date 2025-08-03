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
    try {
      sheetSuccess = await addContactToSheet({ name, email, phone, message });
    } catch (error) {
      console.error('Google Sheets error:', error);
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      emailSuccess = await sendContactNotification({ name, email, phone, message });
    } catch (error) {
      console.error('Email error:', error);
    }

    // Return success even if one method fails
    const successMessage = 'Message sent successfully! We will get back to you soon.';
    
    if (sheetSuccess || emailSuccess) {
      return NextResponse.json(
        { message: successMessage },
        { status: 200 }
      );
    } else {
      // If both fail, still return success but log the issue
      console.warn('Both Google Sheets and email failed, but form was submitted');
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