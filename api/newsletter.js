export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const body = req.body || {};
    const response = await fetch('https://formspree.io/f/xjgjjekd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...body, _type: 'newsletter' }),
    });

    if (response.ok) {
      res.redirect(302, '/newsletter-thanks');
    } else {
      res.redirect(302, '/');
    }
  } catch {
    res.redirect(302, '/');
  }
}
