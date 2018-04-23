const { 
    GraphQLObjectType, 
    GraphQLInt, 
} = require("graphql");
const UserModel = require("./database/models/User");
const LanguageModel = require("./database/models/Language");
const LanguageType = require("./types/Language");
const CurrencyType = require("./types/Currency");


module.exports = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        findAllLanguages: {
            type: new GraphQLList(LanguageType),
            resolve(parentValue, args) {
                return LanguageModel.findAll().then(
                    languages => languages.dataValues
                );
            }
        },
        findLanguageByUser: {
            type: LangueType,
            args: { userId: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return UserModel.findById(userId).then(
                    user => user.dataValues.language
                );
            }
        },
        findCurrencyByUser: {
            type: CurrencyType,
            args: { userId: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return UserModel.findById(args.userId).then(
                    user => user.dataValues.currency
                );
            }
        }
    }
}); 