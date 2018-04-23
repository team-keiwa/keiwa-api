const Sequelize = require("sequelize");
const connection = require("../connection");

const Currency = connection.define("currency", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, { timestamps: false });

connection.sync().then(() => console.log("Created model currency"));

module.exports = Currency;