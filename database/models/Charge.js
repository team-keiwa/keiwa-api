const Sequelize = require("sequelize");
const connection = require("../connection");
const Media = require("./Media");
const User = require("./User");
const Expense = require("./Expense");


const Charge = connection.define("charge", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    isPeriodic: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    periodicity: {
        type: Sequelize.ENUM,
        values: [
            "Hour", 
            "Day", 
            "Week", 
            "Month", 
            "Trimester", 
            "Semester", 
            "Year", 
            "Decade", 
            "Century"
        ],
        allowNull: true,
        defaultValue: null
    }
});

Charge.belongsTo(Media);
Charge.belongsToMany(User);
Charge.belongsToMany(User, { through: Expense });

module.exports = Charge;