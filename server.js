import 'dotenv/config';
import './config/db.js';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './api/routes/routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
