const Sequelize = require("sequelize");

const connection = require("../connection");

const Service = require("./Service");

const Product = connection.define("product", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
});

Product.belongsTo(Service);

module.exports = Product;