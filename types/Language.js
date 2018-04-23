const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLList
} = require("graphql");
const User = require("./User");


const Language = new GraphQLObjectType({
    name: 'Language',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        icon: { type: GraphQLString },
        users: { type: new GraphQLList(User) }
    })
});

module.exports = Language;