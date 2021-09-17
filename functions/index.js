const functions = require("firebase-functions");
const express = require("express");
const cors=require("cors");
const stripe = require("stripe")(
    "sk_test_51JPQc4SDJ7LQWEGBtl2xKQoy5pf4d690vCZcw0riUMlGT4bQHnDT7h22YScflmTTAXQQng1heFxYi46SKxAVG8lg00hjCYMcHa"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/',(req,res) => res.status(200).send('hello world'))

app.post('/payments/create',async(req,res) => {
    const total = req.query.total;

    console.log("pay req, for this >>>",total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    res.status(201).send({
        clientSecret : paymentIntent.client_secret,

    });
})

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-bb98e/us-central1/api