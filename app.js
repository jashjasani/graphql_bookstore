import express from "express"
import { GraphQLSchema } from "graphql"
import schema from "./schema.js"
// import { createHandler } from 'graphql-http/lib/use/express';
import {graphqlHTTP } from "express-graphql"


const app = express()

app.use("/graphql", graphqlHTTP({ schema : schema, graphiql: true}))

app.listen(4000, ()=>{
    console.log("Listening on port 4000");
})