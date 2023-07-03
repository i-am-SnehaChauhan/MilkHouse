import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import env from 'dotenv';

// routes
import userRoutes from './routes/user.js';

const app = express();

env.config();

const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;

// MongoDB Connection
mongoose.connect(
    `mongodb+srv://${user}:${password}@milkhouse.wtgwlin.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, 
      useUnifiedTopology: true   
    }
).then(() => {
    console.log('Connected to database!');
    }
).catch(() => {
    console.log('Connection failed!');
    }
);



app.use(bodyParser.json());


app.listen(process.env.PORT, () => {
    console.log('Example app listening on ' + process.env.PORT);
    }
);