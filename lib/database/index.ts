import mongoose from 'mongoose';

//Need to  add  to  environment  variables
const MONGODB_URI = process.env.MONGODB_URI;

//Set into empty object if we don't have the db connection
//Initialize the cached connection
let cached = (global as any).mongoose || { conn: null, promise: null };

//Attempt to retrieve mongoDB object
export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is not missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'helpie',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}

