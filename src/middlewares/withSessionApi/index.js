
import jwt from "jsonwebtoken";
import { getCookies } from "@/src/utils/cookies";

const withSessionApi = (handler) => {
  return async (req, res) => {
    try {
      const token = getCookies(req.headers.cookie, "access_token");
      if (token) {
        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
        if (!tokenPayload?.data) throw new Error("invalid token");
        req.user = tokenPayload.data._id;
        return handler(req, res);
      }
    } catch (error) {
      console.log(error);
      return res.status(401).json("unauthorized");
    }
  };
};
export default withSessionApi;