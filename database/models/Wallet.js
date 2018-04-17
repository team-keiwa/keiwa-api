const Sequelize = require("sequelize");

const connection = require("../connection");

const Wallet = connection.define("wallet", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Wallet;