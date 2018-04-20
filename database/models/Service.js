const Sequelize = require("sequelize");
const connection = require("../connection");
const SubSector = require("./SubSector");
const Media = require("./Media");
const Product = require("./Product");


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
Service.belongsTo(Media);
Service.hasMany(Product);

module.exports = Service;