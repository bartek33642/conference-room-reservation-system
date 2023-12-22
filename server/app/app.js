import config from "./config";
const express = require("express");
const pool = require("../db");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
import routes from "./REST/routes"; 

app.use(cors({
    origin: '*',
  }));
  
  app.options('*', cors()); 
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ limit: "2048kb" }));
  
  app.get("/", (req, res) => {
      console.log("start");
      res.send("Hello, Server was started")
  });

  routes(app);

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
  })