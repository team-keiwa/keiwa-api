const Sequelize = require("sequelize");
const connection = require("../connection");
const User = require("./User");
const Media = require("./Media");


const Language = connection.define("language", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });

Language.hasMany(User);
Language.belongsTo(Media)

module.exports = Language;