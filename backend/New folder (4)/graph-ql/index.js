// const express=require('express');
// const { connectdb } = require('./db/db');


// const app=express();
// require('dotenv').config();

// port=process.env.PORT;

// app.listen(port,async()=>{
//     console.log("connected ")
//     await connectdb(process.env.MONGO_URI)
//     console.log("database connected ")
// })

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

async function start() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 3000 },
    });

    console.log(`🚀 Server ready at ${url}`);
}

start();
