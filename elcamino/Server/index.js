// server/index.js

const express = require("express");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const db = require('./queries')
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/addr', db.getAddr)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});