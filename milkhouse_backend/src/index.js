import express from 'express';
import env from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();

env.config();

const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;

Connection(user, password);

app.listen(process.env.PORT, () => {
    console.log('App listening on ' + process.env.PORT);
    }
);

DefaultData();