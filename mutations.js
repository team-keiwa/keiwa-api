const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require("graphql");
const UserModel = require("./database/models/User");
const UserType = require("./types/User");

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                cellphone: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return UserModel
                    .create({ cellphone: args.cellphone})
                    .then(user => console.log(user))
            }
        },
        activateUser: {
            type: UserType,
            args: {
                userId: { type: GraphQLInt },
                token: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                const user = UserModel.findById(userId).then(user => user.dataValues);
                
            }
        }
    }
});