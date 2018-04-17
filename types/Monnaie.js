const { 
    GraphQLObjectType, 
    GraphQLInputObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLBoolean, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLNonNull 
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'Monnaie',
    fields: () => ({
        id_monnaie: { type: GraphQLInt },
        nom_monnaie: { type: GraphQLString },
        status_monnaie: { type: GraphQLInt }
    })
});