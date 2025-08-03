import { NextRequest, NextResponse } from 'next/server';

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

    // For now, we'll log the data and return success
    // In production, you'd integrate with an email service like SendGrid, Mailgun, etc.
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with email service
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'tonystanks121@gmail.com',
    //   subject: 'New Contact Form Submission - Digital Wing',
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    return NextResponse.json(
      { message: 'Message sent successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 