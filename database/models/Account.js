const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const connection = require("../connection");

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

connection.sync().then(() => console.log("Created model account"));

module.exports = Account;