const Sequelize = require("sequelize");

const connection = require("../connection");

const Language = require("./Language");
const Suggestion = require("./Suggestion");
const Currency = require("./Currency");
const Product = require("./Product");
const Service = require("./Service");
const SubSector = require('./SubSector');
const Sector = require("./Sector");
const Wallet = require("./Wallet");
const Charge = require("./Charge");
const Account = require("./Account");


const Media = connection.define("media", {
    uri: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Media;