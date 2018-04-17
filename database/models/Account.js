const Sequelize = require("sequelize");

const connection = require("../connection");

const Restriction = require("./Restriction");
const User = require("./User");

const Account = connection.define("account", {
    login: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: (account, options) => {
            account.password = bcrypt.hash(account.password)
        }
    }
});

Account.belongsTo(Restriction);
Account.belongsTo(User);

module.exports = Account;