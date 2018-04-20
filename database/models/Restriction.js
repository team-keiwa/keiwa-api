const Sequelize = require("sequelize");
const connection = require("../connection");
const Account = require("./Account");

const Levels = {
    ADMIN: 0,
    SELLER: 1
};

const Restriction = connection.define("restriction", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    level: {
        type: Sequelize.ENUM,
        values: [Levels.ADMIN, Levels.SELLER],
        allowNull: false,
        defaultValue: Levels.ADMIN
    }
});

Restriction.hasMany(Account);

module.exports = Restriction;