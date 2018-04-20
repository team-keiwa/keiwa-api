const Sequelize = require("sequelize");
const connection = require("../connection");
const Media = require("./Media");
const SubSector = require("./SubSector");


const Sector = connection.define("sector", {
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

Sector.hasMany(SubSector);
Sector.belongsTo(Media);

module.exports = Sector;