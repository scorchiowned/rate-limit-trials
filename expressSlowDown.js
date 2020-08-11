const express = require("express");
const slowDown = require("express-slow-down");

const speedLimiter = slowDown({
  windowMs: 1 * 60 * 1000, // 1 minute
  delayAfter: 100,
  delayMs: 100,
});

const app = express();
const port = 3000;

app.use(speedLimiter);

app.get("/", (req, res) => {
  res.send("Stop hitting me");
});

app.listen(port, (err) => {
  if (err) throw new Error("Oops.. There was an error");

  console.log(`Listening on port`, port);
});
