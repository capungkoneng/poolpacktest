const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

/******************************************
 *
 ******************************************/
const middle = require("./middlewares");
const api = require("./src/route/route");

/******************************************
 *
 ******************************************/
const app = express();

app.get("/", (req, res) => {
  res.json({
    massage: `Poolpack test`,
  });
});

/******************************************
 *
 ******************************************/
app.use(morgan(`dev`));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/api/v1", api);
/******************************************
 *
 ******************************************/
app.use(middle.notFound);
app.use(middle.errorHandler);

module.exports = app;
