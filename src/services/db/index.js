import mongoose from "mongoose";
import models from "./models";

const remoteConnectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGOUSERNAME}:${process.env.NEXT_PUBLIC_MONGOPASSWORD}@cluster0.93tbw3c.mongodb.net/?retryWrites=true&w=majority`;
const localConnectionString = "mongodb://localhost:27017/linkifydb";

const db = (handler) => {
  return async (req, res) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(remoteConnectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return handler(req, res);
  };
};
export default db;


export const dbPage = (handler) => {
  return async (ctx) => {
    if (mongoose.connections[0].readyState) {
      return handler(ctx);
    }
    await mongoose.connect(localConnectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return handler(ctx);
  };
};