const Sequelize = require("sequelize");
const connection = require("../connection");


const UserProduct = connection.define("userProduct", {
    price: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = UserProduct;