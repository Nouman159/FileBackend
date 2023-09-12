import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const DBConnection = async () => {
    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@filesharingurl.mto4baf.mongodb.net/`
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to database ' + error.message);
    }
}

export default DBConnection;