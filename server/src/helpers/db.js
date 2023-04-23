import mongoose from 'mongoose'

const db = process.env.MONGOOSE_URL;

export const connectToDB = () => {
    mongoose.connect(db, {useNewUrlParser: true});
    return mongoose.connection
}