import { NextRequest, NextResponse } from 'next/server';

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

    // For now, we'll log the data and return success
    // In production, you'd integrate with an email service and calendar system
    console.log('Appointment Booking:', {
      name,
      email,
      phone,
      date,
      time,
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with email service and calendar
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'tonystanks121@gmail.com',
    //   subject: 'New Appointment Booking - Digital Wing',
    //   html: `
    //     <h2>New Appointment Booking</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Date:</strong> ${date}</p>
    //     <p><strong>Time:</strong> ${time}</p>
    //   `
    // });

    return NextResponse.json(
      { message: 'Appointment booked successfully! We will confirm your slot soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment. Please try again.' },
      { status: 500 }
    );
  }
} 