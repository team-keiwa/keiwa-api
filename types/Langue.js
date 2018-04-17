const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'Langue',
    fields: () => ({
        id_langue: { type: GraphQLInt },
        nom_langue: { type: GraphQLString },
        status_langue: { type: GraphQLInt }
    })
});