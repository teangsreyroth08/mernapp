const express = require('express');
const colors = require('colors'); //await mongoose.connect(process.env.MONGO_URL
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema =require('./schema/schema');
const connectDB = require('./config/db');  //module
const port = process.env.PORT || 5002;

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`server running on port ${port}`));

