const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IOxkiCFtIIbiKc4nd7TobZeORXV45KZl0enH8iAG79DXBZPaw3gAAy9onqnaVqlslkDkm16GI0KOm0gxKLOnzfj00XzBNoyQr"
  );

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/medination-258dd/us-central1/api