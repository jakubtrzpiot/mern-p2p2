import 'dotenv/config';
import './config/db.js';
import express from 'express';
import cors from 'cors';
import routes from './api/routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
