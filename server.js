const express = require("express");
const expressGraphQl = require("express-graphql");
const schema = require('./schema.js');
const cors = require('cors');
const app = express();
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 
});
const expressGraphQlMiddleware = expressGraphQl({
  schema: schema,
  graphiql: true
});
const port = process.env.PORT || 9000;


app.use("/graphql", corsMiddleware, expressGraphQlMiddleware);
app.listen(port, () => {
  console.log("Server started and listening at https://localhost:" + port);
});