const Sequelize = require("sequelize");
const connection = require("../connection");
const User = require("./User");


const Reminder = connection.define("reminder", {
    starts_at: {
        type: Sequelize.TIME,
        allowNull: false        
    },
    periodicity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    N: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

Reminder.belongsTo(User);

module.exports = Reminder;