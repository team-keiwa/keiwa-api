const Sequelize = require("sequelize");
const connection = require("../connection");
const Media = require("./Media");
const User = require("./User");


const Wallet = connection.define("wallet", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

Wallet.belongsTo(Media);
Wallet.belongsToMany(User);

module.exports = Wallet;