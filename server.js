const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

app.use(helmet());
app.disable("x-powered-by");

app.use(
  morgan(
    "[:date[clf]] :method :url :status :response-time ms - :res[content-length]"
  )
);

app.get("/", (req, res, next) => {
  res.send("Welcome to Yuzer by Oden.");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry couldn't find what you were looking for!");
});

const listener = app.listen(8060, async () => {
  console.log(`oden-yuzer is listening on port ${listener.address().port}\n`);
});
