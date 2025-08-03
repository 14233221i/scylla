import { google } from 'googleapis';

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function addContactToSheet(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      console.error('Google Sheet ID not configured');
      return false;
    }

    const values = [
      [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.message,
        'Contact Form'
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Contact Submissions!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    console.log('Contact data added to Google Sheet');
    return true;
  } catch (error) {
    console.error('Error adding to Google Sheet:', error);
    return false;
  }
}

export async function addBookingToSheet(data: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      console.error('Google Sheet ID not configured');
      return false;
    }

    const values = [
      [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.date,
        data.time,
        'Appointment Booking'
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Appointment Bookings!A:G',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    console.log('Booking data added to Google Sheet');
    return true;
  } catch (error) {
    console.error('Error adding to Google Sheet:', error);
    return false;
  }
} 