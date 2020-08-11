const express = require("express");
const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 100 requests per windowMs
  message: "Max call limit exceeded",
});

const app = express();
const port = 3000;

app.use(limiter);

app.get("/", (req, res) => {
  console.log("server hit");
  res.send("Stop hitting me");
});

app.listen(port, (err) => {
  if (err) throw new Error("Oops.. There was an error");

  console.log(`Listening on port`, port);
});
