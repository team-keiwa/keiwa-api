const Sequelize = require("sequelize");

const connection = require("../connection");

const SubSector = require("./SubSector");

const Service = connection.define("service", {
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

Service.belongsTo(SubSector);

module.exports = Service;