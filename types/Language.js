const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
} = require("graphql");

const Language = new GraphQLObjectType({
    name: 'Language',
    fields: () => ({
        id: { 
            type: GraphQLInt 
        },
        name: { 
            type: GraphQLString 
        }
    })
});

module.exports = Language;