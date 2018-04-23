const Sequelize = require("sequelize");
const connection = require("../connection");


const Language = connection.define("language", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }   
}, { timestamps: false });

connection.sync().then(() => console.log("Created model language"));

module.exports = Language;