import express from 'express';
import cookieParser from 'cookie-parser';
import {toDoRouter} from './routes/to-do-router';

export const app = express();

function allowCrossDomain(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}

app.use(allowCrossDomain);
app.use(cookieParser(), express.json({ extended: true }));
app.use('/', toDoRouter);
