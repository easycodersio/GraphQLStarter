import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import Hello from 'graphql/queries/Hello/query/Hello'

const query = new GraphQLObjectType({
  description: 'root query',
  fields: {
    Hello,
  },
  name: 'RootQuery',
})

const schema = new GraphQLSchema({
  query,
})

export default schema
