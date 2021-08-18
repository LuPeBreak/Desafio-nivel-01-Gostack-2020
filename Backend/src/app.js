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


//routes
app.get("/repositories", (request, response) => {
  // TODO
});

app.post("/repositories", (request, response) => {
  // TODO
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
