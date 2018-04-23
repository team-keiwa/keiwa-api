const Sequelize = require("sequelize");
const connection = require("../connection");


const Sale = connection.define("sale", {
    isPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    willBePaidAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Sale;