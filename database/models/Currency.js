const Sequelize = require("sequelize");
const connection = require("../connection");
const User = require("./User");
const Media = require("./Media");


const Currency = connection.define("currency", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

Currency.hasMany(User);
Currency.belongsTo(Media);

module.exports = Currency;