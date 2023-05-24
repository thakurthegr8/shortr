import db from "@/src/services/db";
import jwt from "jsonwebtoken";
import User from "@/src/services/db/models/User";
import moment from "moment";
import bcrypt from "bcrypt";

export default db(async function (req, res) {
  if (req.method !== "POST") return res.status(405).send("method not allowed");
  const { email, password } = req.body;
  try {
    const getUser = await User.findOne({ email });
    if (!getUser) throw new Error("user does not exists");
    // if (!getUser.verified) throw new Error("user is not verified");
    // const otp = generateOTP();
    // const initiateOTP = await setOTP(email, otp);
    console.log(password, getUser.password);
    const verifyPassword = await bcrypt.compareSync(password, getUser.password);
    if (!verifyPassword) throw new Error("invalid password");
    const token = jwt.sign({ data: getUser }, process.env.JWT_SECRET);
    res.setHeader(
      "Set-Cookie",
      `access_token=${token}; HttpOnly; path=/; Expires=${moment().add(
        1,
        "day"
      )}`
    );
    return res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
    return res.status(400).json(error);
  }
});