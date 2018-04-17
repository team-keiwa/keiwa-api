const Sequelize = require("sequelize");
const connection = require("../connection");
const User = require("./User");
const Media = require("./Media");

const Suggestion = connection.define("suggestion", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Suggestion.belongsTo(User);

module.exports = Suggestion;