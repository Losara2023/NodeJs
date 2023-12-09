const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

const Article = require("./models/myDataSchema");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});
app.get("/index.html", (req, res) => {
  res.send("<h1>You Data has been sended</h1>");
});
mongoose
  .connect(
    "mongodb+srv://losara:0tn20s5Al14CVlrL@cluster0.cfsrxmo.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/", (req, res) => {
  console.log(req.body);
  const myData = new Article(req.body);
  myData
    .save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch((error) => {
      error;
    });
});
