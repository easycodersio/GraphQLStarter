import { GraphQLObjectType, GraphQLString } from 'graphql'

const HelloType = new GraphQLObjectType({
  description: 'Hello World Type',
  fields: {
    message: { type: GraphQLString },
  },
  name: 'HelloType',
})

export default HelloType
