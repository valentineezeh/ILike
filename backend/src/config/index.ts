import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  // add db url
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/I-Like',
  // add application port
  port: process.env.PORT || '5000'
};

export default config;
