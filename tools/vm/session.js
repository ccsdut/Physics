import Hyperbeam from '@hyperbeam/node';

// YOUR SECRET KEY - Keep this file private and never expose this code publicly
const secretKey = 'sk_live_VxWQPkpNre1qBczBvWxelSX60yrq6WDG9gupz2xRdY0';

const hyperbeam = new Hyperbeam(secretKey);

export default async function handler(req, res) {
  try {
    const session = await hyperbeam.createSession();
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
