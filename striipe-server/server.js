const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51PUiXdJUQnWgPZkGrcGO6VO3ymvR81CAGHete8zdAlTf7WxGM50eiBMJ2Asf1IuqjZTzQKro3jSirIy9iWKbqnTV00uPHJ6uDR'); // Replace with your actual Stripe secret key
const cors = require('cors');
require('dotenv').config(); // Load environment variables

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
