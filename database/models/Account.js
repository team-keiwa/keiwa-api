const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const connection = require("../connection");
const Restriction = require("./Restriction");
const User = require("./User");
const Media = require("./Media");

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
            const saltRounds = 10;
            account.password = bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => hash);
        }
    }
});

Account.belongsTo(Restriction);
Account.belongsTo(User);
Account.belongsTo(Media);

module.exports = Account;