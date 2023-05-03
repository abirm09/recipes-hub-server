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
  const data = [
    {
      id: 1,
      name: "Chefs",
      totalChefs,
      img: "https://i.ibb.co/dbvqhg4/chef.png",
    },
    {
      id: 2,
      name: "Recipes",
      totalRecipes,
      img: "https://i.ibb.co/nLthk9w/search.png",
    },
    {
      id: 3,
      name: "Photos",
      photos,
      img: "https://i.ibb.co/Yf9Qy3k/image-gallery.png ",
    },
    {
      id: 4,
      name: "Comments",
      comments,
      img: "https://i.ibb.co/SXvHjgQ/bubble-chat.png",
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
