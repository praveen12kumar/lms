import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/dbConfig.js';
import { CLIENT_URL } from './config/serverConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
const app = express();

cors({
  origin: CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Hello, World!' });
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  connectDB();
});
