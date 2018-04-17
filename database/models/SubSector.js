const Sequelize = require("sequelize");

const connection = require("../connection");

const SubSector = connection.define("subsector", {
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

SubSector.belongsTo(Sector);

module.exports = SubSector;