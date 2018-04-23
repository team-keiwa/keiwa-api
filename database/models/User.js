const Sequelize = require("sequelize");
const connection = require("../connection");
const Charge = require("./Charge");
const UserCharge = require("./UserCharge");
const Account = require("./Account");
const Expense = require("./Expense");
const WorkingDay = require("./WorkingDay");
const Wallet = require("./Wallet");
const Product = require("./Product");
const UserProduct = require("./UserProduct");
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

User.belongsTo(Currency);
User.belongsTo(Language);
User.belongsToMany(Charge);
User.belongsToMany(Charge, { through: Expense });
User.belongsToMany(Product, { through: UserProduct });
User.belongsToMany(Wallet);
User.hasMany(Account);
User.hasMany(WorkingDay);

module.exports = User