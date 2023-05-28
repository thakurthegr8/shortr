import db from "@/src/services/db";
import Profile from "@/src/services/db/models/Profile";

const handler = db(async (req, res) => {
  if (req.method !== "POST") return res.status(405).json("method not allowed");
  try {
    const profile = await Profile.exists({ username: req.body.username });
    if(profile !== null) throw new Error("username already exists");
    return res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(400).json("error");
  }
});

export default handler;
