import { getCookies } from "@/src/utils/cookies";
import jwt from "jsonwebtoken";

const withSessionPage = (handler) => {
  return async (ctx) => {
    try {
      const token = getCookies(ctx.req.headers.cookie, "access_token");
      if (token) {
        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
        if (!tokenPayload?.data) throw new Error("invalid token");
        ctx.req.user = tokenPayload.data._id;
        return handler(ctx);
      }
      return { notFound: true };
    } catch (error) {
      console.log(error);
      return { notFound: true };
    }
  };
};
export default withSessionPage;