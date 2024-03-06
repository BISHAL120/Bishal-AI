import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cashed: MongooseConnection = (global as any).mongoose;

if (!cashed) {
  cashed = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  // if we have a cashed connection we break the function and return the cashed connection
  if (cashed.conn) return cashed.conn;

  // if we don't have a URL we throw an error
  if (!MONGODB_URL) throw new Error("Missing Mongodb_URL");

  cashed.promise =
    cashed.promise ||
    // if we don't have a cashed connection we make a new connection to Mongodb
    mongoose.connect(MONGODB_URL, {
      dbName: "bishalai",
      bufferCommands: false,
    });

  // resolve the promise in connection
  cashed.conn = await cashed.promise;

  // then return the connection
  return cashed.conn;
};
