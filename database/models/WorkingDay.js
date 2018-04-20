const Sequelize = require("sequelize");
const connection = require("../connection");
const User = require("./User");


const WorkingDay = connection.define("workingDay", {
    name: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        defaultValue: "Monday"
    }
});

WorkingDay.belongsTo(User);

module.exports = WorkingDay;