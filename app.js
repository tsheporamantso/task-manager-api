/* eslint-disable no-console */
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/v1/tasks', tasks);

// routes
app.get('/', (req, res) => {
  res.status(200).send('Task Manager Application');
});

app.all('*', (req, res) => {
  res.status(404).json({ success: false, msg: 'Resource could not be found!' });
});

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
