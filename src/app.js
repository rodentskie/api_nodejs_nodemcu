const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// accessible to any
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
const io = require("socket.io")(server); //Bind socket.io to our express server.

module.exports = { io }; // export before routes

app.get("/", (req, res) => {
  res.send("<h1>Welcome to NodeMCU Socket API</h1>");
});

// no routes on this project;

const { webSockets } = require("./use-cases/leds/app");

// initialize web socket
webSockets();

module.exports = app;
