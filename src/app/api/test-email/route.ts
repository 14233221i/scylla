import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification } from '../../../../lib/email';

export async function POST(request: NextRequest) {
  try {
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