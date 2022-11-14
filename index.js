require("dotenv").config();
const { Client } = require("pg");
const express = require("express");

// ENV VARIABLES
const { DATABASE_ENDPOINT, PORT, NODE_ENV } = process.env;

// EXPRESS
const app = express();

// DATABASE
const client = new Client({
  connectionString: DATABASE_ENDPOINT,
});
client.connect();

// HEALTH CHECK
app.get("/health", async (req, res) => {
  client.query("SELECT 1 AS COUNT", (error, result) => {
    if (error) throw error;

    res.json({
      status: "OK",
      environment: NODE_ENV,
    });
  });
});

// SERVER INIT
app.listen(PORT, () => {
  console.log(`${NODE_ENV} app listening on port ${PORT}`);
});
