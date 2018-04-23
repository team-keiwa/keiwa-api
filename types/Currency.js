const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLInt,
    GraphQLList
} = require("graphql");
const User = require("./User");


const Currency = new GraphQLObjectType({
    name: 'Currency',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        icon: { type: GraphQLString }
    })
});

module.exports = Currency;