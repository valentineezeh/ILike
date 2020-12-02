import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/I-Like',
  port: process.env.PORT || '5000',
}

export default config;