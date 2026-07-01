export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    // Forward form data to Formspree as JSON
    const body = req.body || {};
    const response = await fetch('https://formspree.io/f/xjgjjekd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      // We control this redirect — nothing to do with Formspree's plan
      res.redirect(302, '/thank-you');
    } else {
      res.redirect(302, '/contact');
    }
  } catch {
    res.redirect(302, '/contact');
  }
}
