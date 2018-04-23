const Sequelize = require("sequelize");
const connection = require("../connection");

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