const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require("graphql");
const Language = require("./Language");
const Currency = require("./Currency");


const User = new GraphQLObjectType({
    name: 'User',
    fields:()=>({
		id: { type: GraphQLInt },
        fName: { type: GraphQLString },
        lName: { type: GraphQLString },
        cellphone: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        location: { type: GraphQLString },
        subscribedAt: { type: GraphQLString },
        subscriptionToken: { type: GraphQLString },
        isValid: { type: GraphQLBoolean },
        language: { type: new GraphQLObjectType(Language) },
        currency: { type: new GraphQLObjectType(Currency) }
    })
});

module.exports = User;