import mongoose from 'mongoose';

import { NODE_ENV } from '../config/serverConfig.js';
import { DEV_DB_URL, PROD_DB_URL } from '../config/serverConfig.js';

export default async function connectDB() {
  try {
    if (NODE_ENV !== 'development') {
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connect(PROD_DB_URL);
    }

    console.log(`Connected to database from ${NODE_ENV} environment`);
  } catch (error) {
    console.log('Error connecting to database', error);
  }
}
