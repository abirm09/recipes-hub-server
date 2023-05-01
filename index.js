const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
const chefsData = require("./data/chefs-and-recipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send(["Server is running."]);
});

//get all chefs data
app.get("/chefs/all", (req, res) => {
  res.send(chefsData);
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
