/* eslint-disable no-console */
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');

const app = express();

/*
? Middleware
*/
app.use(express.static('./public'));
app.use(express.json());

/*
? Routes
*/
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
