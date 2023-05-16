import mongoose from "mongoose";
import models from "./models";

const remoteConnectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGOUSERNAME}:${process.env.NEXT_PUBLIC_MONGOPASSWORD}@cluster0.93tbw3c.mongodb.net/?retryWrites=true&w=majority`;
const localConnectionString = "mongodb://localhost:27017/cgptdb";

const db = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  await mongoose.connect(localConnectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
export default db;
