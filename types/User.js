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
    name: 'User',
    fields:()=>({
		id_user: { type: GraphQLInt },
        nom_user: { type: GraphQLString },
        prenom_user: { type: GraphQLString },
        mail_user: { type: GraphQLString },
        date_inscription: { type: GraphQLString },
        sexe_user: { type: GraphQLInt },
        location_user: { type: GraphQLString },
        status_user: { type: GraphQLInt },
        langue_id_langue: { type: GraphQLInt },
        monnaie_id_monnaie: { type: GraphQLInt },
        sous_categorie_id_sous_categorie: { type: GraphQLInt }
    })
});

