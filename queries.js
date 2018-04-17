const { 
    GraphQLObjectType, 
    GraphQLInt, 
} = require("graphql");
const UserModel = require("./database/models/User");
const LangueType = require("./types/Langue");
const MonnaieType = require("./types/Monnaie");
const ActiviteType = require('./types/Activite');

module.exports = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getUserLangue: {
            type: LangueType,
            args: { user_id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return new UserModel().findLangue(args.user_id).then(value => value[0]);
            }
        },
        getUserMonnaie: {
            type: MonnaieType,
            args: { user_id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return new UserModel().findMonnaie(args.user_id).then(value => value[0]);
            }
        },
        getUserActivity: {
            type: ActiviteType,
            args: { user_id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return new UserModel().findActivity(args.user_id).then(value => value[0]);
            }
        }
    }
}); 