// app/api/contact/route.js
// يجب إضافة RESEND_API_KEY في Vercel Environment Variables
// واستبدال 'your@email.com' بإيميلك الحقيقي

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // ── الخيار 1: Resend (الأفضل) ──
    // npm install resend
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    // ── الخيار 2: Nodemailer (Gmail) ──
    // npm install nodemailer
    // const nodemailer = await import('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: 'your@email.com',
    //   subject: `Portfolio: Message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    // ── مؤقتاً: لوج فقط (للتطوير) ──
    console.log('New contact message:', { name, email, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
