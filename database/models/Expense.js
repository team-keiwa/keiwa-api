const Sequelize = require("sequelize");
const connection = require("../connection");


const Expense = connection.define("expense", {
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});