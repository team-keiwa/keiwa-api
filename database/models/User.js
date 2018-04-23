const Sequelize = require("sequelize");
const connection = require("../connection");
const Account = require("./Account");
const Currency = require("./Currency");
const Language = require("./Language");


const User = connection.define("user", {
    fName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cellphone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    gender: {
        type: Sequelize.CHAR,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true
    },
    subscribedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    subscriptionToken: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    isValid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { timestamps: false });

User.hasMany(Account);
User.belongsTo(Currency);
User.belongsTo(Language);

connection.sync().then(() => console.log("Created model user"));

module.exports = User