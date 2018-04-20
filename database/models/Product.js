const Sequelize = require("sequelize");
const connection = require("../connection");
const Service = require("./Service");
const Media = require("./Media");
const User = require("./User");
const UserProduct = require("./UserProduct");


const Product = connection.define("product", {
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

Product.belongsTo(Service);
Product.belongsTo(Media);
Product.belongsToMany(User, { through: UserProduct });

module.exports = Product;