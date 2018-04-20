const Sequelize = require("sequelize");
const connection = require("../connection");
const UserProduct = require("./UserProduct");


const Stock = connection.define("stock", {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Stock.belongsTo(UserProduct);

module.exports = Stock;