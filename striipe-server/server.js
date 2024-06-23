const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use the Stripe secret key from .env

app.use(express.json());
app.use(cors()); // Enable CORS for all requests

// Handle POST requests to create a checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body;
  console.log(lineItems);

  try {
    const isProduction = process.env.NODE_ENV === 'production';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: isProduction ? process.env.SUCCESS_URL_PROD : process.env.SUCCESS_URL,
      cancel_url: isProduction ? process.env.CANCEL_URL_PROD : process.env.CANCEL_URL,
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set up your server to listen on a specific port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
