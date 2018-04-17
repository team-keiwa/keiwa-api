const Sequelize = require("sequelize");
const connection = new Sequelize("keiwa", "root", "+AnQ@tfqW_RdGE8j", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection