const models = require("../sequelize/models");
// ######
const query = require("./query");
// ######
const ledsDb = query({ models });
// ######

module.exports = ledsDb;
