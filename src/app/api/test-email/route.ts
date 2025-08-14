import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification } from '../../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    // Debug: Check environment variables
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email environment variables not configured' },
        { status: 500 }
      );
    }

    // Test email data
    const testData = {
      name: "Test User",
      email: "test@example.com",
      phone: "+91 1234567890",
      message: "This is a test email from Scylla website to verify email functionality is working correctly."
    };

    const emailSuccess = await sendContactNotification(testData);

    if (emailSuccess) {
      return NextResponse.json(
        { message: 'Test email sent successfully! Check tonystanks121@gmail.com' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send test email. Check environment variables.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Email test failed. Please check your configuration.' },
      { status: 500 }
    );
  }
} 