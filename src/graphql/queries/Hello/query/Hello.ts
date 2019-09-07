import HelloType from 'graphql/queries/Hello/types/Hello'

export default {
  resolve: () => ({ message: 'Hello World!' }),
  type: HelloType,
}
