//dependecies import
const express = require("express");
const cors = require("cors");
const {v4, validate} = require('uuid')

//express initialization
const app = express();

//express configs
app.use(express.json());
app.use(cors());


//definition of repositores
const repositories = [];

//middlewares
function verifyID(request,response,next){
  const {id} = request.params;

  if(!validate(id)){
    return response.status(400).json({message:"invalid id"});
  }
  return next();
}

//routes
app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url,techs } = request.body;

  const repositorie = {
    id:v4(),
    title,
    url,
    techs,
    likes:0,
  }
  
  repositories.push(repositorie);

  return response.json(repositorie);
});

app.put("/repositories/:id",verifyID, (request, response) => {
  const {
    id
  } = request.params;
  const {
    title,
    url,
    techs
  } = request.body;
  
  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositorieIndex < 0) {
    return response.status(400).json({
      error: "repositorie not found"
    })
  }

  const repositorie = {
    id,
    title,
    url,
    techs,
    likes:repositories[repositorieIndex].likes,
  };

  repositories[repositorieIndex] = repositorie;

  return response.json(repositorie);
});

app.delete("/repositories/:id",verifyID, (request, response) => {
  // TODO
});

app.post("/repositories/:id/like",verifyID, (request, response) => {
  // TODO
});

module.exports = app;
