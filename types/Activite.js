const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'Activite',
    fields: () => ({
        id_sous_categorie: { type: GraphQLInt },
        nom_sous_categorie: { type: GraphQLString },
        status_table: { type: GraphQLInt },
        activite_id_activite: { type: GraphQLInt }
    })
});