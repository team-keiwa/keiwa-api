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
const UserModel = require("./database/models/User");
const UserType = require("./types/User");

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: { 
                nom_user: { type: GraphQLString },
                prenom_user: { type: GraphQLString },
                tel_user: { type: GraphQLString },
                mail_user: { type: GraphQLString },
                date_inscription: { type: GraphQLString },
                sexe_user: { type: GraphQLInt },
                location_user: { type: GraphQLString },
                status_user: { type: GraphQLInt },
                langue_id_langue: { type: GraphQLInt },
                monnaie_id_monnaie: { type: GraphQLInt },
                sous_categorie_id_sous_categorie: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                return new UserModel().createUser(args).then(value => value[0]);
            }
        }
    }
});