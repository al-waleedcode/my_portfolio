// app/api/contact/route.js
// Using Formspree to submit contact messages directly from the frontend.
// Replace YOUR_FORM_ID with your actual Formspree form ID.

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'All fields are required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const data = { name, email, message };
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Formspree error:', res.status, text);
      return new Response(JSON.stringify({ success: false, error: 'Failed to send message' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
