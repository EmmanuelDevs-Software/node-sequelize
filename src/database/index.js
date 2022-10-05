const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Address = require("../models/Address");
const User = require("../models/User");
const Tech = require("../models/Tech");

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
