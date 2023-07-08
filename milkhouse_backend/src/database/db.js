import mongoose from "mongoose";

const Connection = async (user, password) => {

       const URL =  `mongodb+srv://${user}:${password}@milkhouse.wtgwlin.mongodb.net/?retryWrites=true&w=majority`;
       try {
            await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
             console.log('Database connected successfully');
        } catch (error) {
            console.log('Error: Database Coneection Failed');
        }

};

export default Connection;