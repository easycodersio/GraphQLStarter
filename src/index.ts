// tslint:disable-next-line: no-var-requires
require('app-module-path').addPath(__dirname)

import { ApolloServer } from 'apollo-server-express'
import env from 'config/env'
import express from 'express'
import schema from 'graphql/schema'

// Create Express app
const app = express()

// Create Apollo Server
const server = new ApolloServer({ schema })

// Pass Express app as middleware to server
server.applyMiddleware({ app })

// Init app
const port = env.port
app.listen(port)

// tslint:disable-next-line
console.log(`🚀 graphql ready @ http://localhost:${port}/graphql`)
