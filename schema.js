import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } from "graphql";
import _ from "lodash"

const books = [
    {name : "The Psychology Of Money", id: "1", genre : "non-fiction"},
    {name : "Atomic Habits", id: "2", genre : "self-help"},
    {name : "World at war", id: "3", genre : "history"},
]

const authors = [
    {name : "Andrew Karpathy", id: "1", age : 45},
    {name : "Donald Trump", id: "2", age : 90},
    {name : "Giba hadook", id: "3", age : 69},
]


const BookType = new GraphQLObjectType({
    name : "Book",
    fields : ()=>({
        id : { type : GraphQLID },
        name : { type : GraphQLString },
        genre : { type : GraphQLString } 
    })
})

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields : ()=>({
        id : { type : GraphQLID },
        name : { type : GraphQLString },
        age : { type : GraphQLInt } 
    })
})


const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        book : {
            type : BookType,
            args : { id : { type : GraphQLID }},
            resolve(parent,args){
                //code
                return _.find(books, {id : args.id})
            }
        },
        author : {
            type : AuthorType,
            args : { id : {type : GraphQLID}},
            resolve(parent,args){
                return _.find(authors, { id : args.id})
            }
        }
    } 
})


export default new GraphQLSchema({
    query : RootQuery
})