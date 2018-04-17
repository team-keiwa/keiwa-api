const Sequelize = require("sequelize");

const connection = require("../connection");

const Charge = connection.define("charge", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
});

module.exports = Charge;