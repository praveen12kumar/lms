import express from 'express';
import { StatusCodes } from 'http-status-codes';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  connectDB();
});
