import express from 'express';
import cookieParser from 'cookie-parser';
import {toDoRouter} from './routes/to-do-router';

export const app = express();

app.use(cookieParser(),express.urlencoded({ extended: true }));
app.use('/', toDoRouter);
