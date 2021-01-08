const { io } = require("../../app");
const ledsDb = require("../../data-access/leds/app");
// #########
const webSocket = require("./websocket");
// #########
const webSockets = webSocket({ ledsDb, io });
// #########
const services = Object.freeze({ webSockets });

module.exports = services;
module.exports = { webSockets };
