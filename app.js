const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to home page');
});

app.use('/api/v1/tasks', tasks);

app.all('*', (req, res) => {
  res.status(404).json({ success: false, msg: 'Resource could not be found!' });
});

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Server listening on port ${port}...`);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

start();
