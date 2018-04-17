const Sequelize = require("sequelize");
const connection = require("../connection");


const Language = connection.define("language", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Language;