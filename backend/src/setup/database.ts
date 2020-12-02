import * as Mongodb from 'mongodb';
import config from '../config/index';

const setupDatabase = async () => {
  const client = new Mongodb.MongoClient(config.databaseUrl, {
    useUnifiedTopology: true
  })
  await client.connect();
  return client.db();
}

export default setupDatabase;