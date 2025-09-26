import Redis from 'ioredis';

import { REDIS_URL } from '../config/serverConfig.js';

//import { REDIS_HOST, REDIS_PORT, REDIS_TOKEN,  } from '../config/serverConfig.js';


// const redis = new Redis({
//     host: REDIS_HOST,
//     port: REDIS_PORT,
//     password: REDIS_TOKEN
// });

const redis = new Redis(REDIS_URL);

export default redis;