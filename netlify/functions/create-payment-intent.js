require("dotenv").config({ path: ".env" });

const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(secretKey);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    console.log("paymentIntent", paymentIntent);
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
