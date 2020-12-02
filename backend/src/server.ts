import app from './app';
import config from './config';
import { connect } from './db/db';

const PORT = config.port;
connect();
app.listen(PORT, () => {
  console.log(`ILike is running on Port : ${PORT}`);
});
