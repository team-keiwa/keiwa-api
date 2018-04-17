const Sequelize = require("sequelize");

const connection = require("../connection");

const Sector = connection.define("sector", {
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

module.exports = Sector;