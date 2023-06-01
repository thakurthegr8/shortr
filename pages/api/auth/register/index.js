import db from "@/src/services/db";
import User from "@/src/services/db/models/User";

export default db(async function (req, res) {
  if (req.method !== "POST") return res.status(405).send("method not allowed");
  const { email, name, password } = req.body;
  try {
    const createUser = await User.create({ email, name, password });
    if (createUser) {
      return res.status(201).json(createUser);
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) return res.status(400).json(error.message);
    return res.status(400).json(error);
  }
});
