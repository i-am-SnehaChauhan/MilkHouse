import express from 'express';
import env from 'dotenv';
import Connection from './src/database/db.js';
// import DefaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './src/routes/route.js';


const app = express();

env.config();

const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;

Connection(user, password);

app.listen(process.env.PORT, () => {
    console.log('App listening on ' + process.env.PORT);
    }
);

// DefaultData();

app.use(express.raw({ type: 'application/json' }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

