import { NextRequest, NextResponse } from 'next/server';
import { addContactToSheet } from '../../../../lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Test data
    const testData = {
      name: "Test User",
      email: "test@example.com",
      phone: "+91 1234567890",
      message: "This is a test submission to verify Google Sheets integration is working correctly."
    };

    const sheetSuccess = await addContactToSheet(testData);

    if (sheetSuccess) {
      return NextResponse.json(
        { message: 'Test data added to Google Sheets successfully! Check your "Contact Submissions" sheet.' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to add to Google Sheets. Check environment variables and sheet setup.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Google Sheets test error:', error);
    return NextResponse.json(
      { error: 'Google Sheets test failed. Please check your configuration.' },
      { status: 500 }
    );
  }
} 