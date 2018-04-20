const connection = require("../connection");
const Charge = require("./Charge");
const UserCharge = require("./UserCharge");
const Account = require("./Account");
const Expense = require("./Expense");
const WorkingDay = require("./WorkingDay");
const Wallet = require("./Wallet");
const Product = require("./Product");
const UserProduct = require("./UserProduct");


const User = connection.define("user", {});

User.belongsToMany(Charge);
User.belongsToMany(Charge, { through: Expense });
User.belongsToMany(Product, { through: UserProduct });
User.belongsToMany(Wallet);
User.hasMany(Account);
User.hasMany(WorkingDay);

module.exports = User