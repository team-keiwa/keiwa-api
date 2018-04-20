const Sequelize = require("sequelize");
const connection = require("../connection");
const Sector = require("./Sector");
const Media = require("./Media");
const Service = require("./Service");

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
SubSector.belongsTo(Media);
SubSector.hasMany(Service);

module.exports = SubSector;