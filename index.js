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

//get chefs by id
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundedChef = chefsData.find(chef => chef.id === id) || null;
  res.send(foundedChef ? foundedChef : ["No data found"]);
});

//info in number
app.get("/infoInNumber", (req, res) => {
  const totalChefs = chefsData.length;
  const totalRecipes = totalChefs * 3;
  const photos = totalRecipes;
  const comments = 56;
  res.send({ totalChefs, totalRecipes, photos, comments });
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
