import db from "@/src/services/db";
import withSessionApi from "@/src/middlewares/withSessionApi";
import User from "@/src/services/db/models/User";
import { deleteProfileImage } from "@/src/utils/apiMethods/auth";
import jwt from "jsonwebtoken";
import moment from "moment";

const DELETE = withSessionApi(
  db(async (req, res) => {
    if (req.method != "DELETE")
      return res.status(405).json("method not allowed");
    try {
      const user = await User.findById(req.user);
      if (!user.image) return res.status(200).json("no profile image exists");
      const removeImage = await deleteProfileImage({
        public_id: user.image.public_id,
        signature:user.image.signature
      });
      if (removeImage) {
        const removeImageFromDB = await User.findOneAndUpdate({ image: null });
        return res.status(200).json(removeImageFromDB);
      }
      return res.status(400).json("unable to remove profile image");
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  })
);

const PUT = withSessionApi(
    db(async (req, res) => {
      const { image } = req.body;
      try {
        const update = await User.findByIdAndUpdate(req.user, { image });
        if (update.image) {
          await deleteProfileImage({
            signature: update.image.signature,
            public_id: update.image.public_id,
          });
        }
        const token = jwt.sign({ data: update }, process.env.JWT_SECRET);
        res.setHeader(
          "Set-Cookie",
          `access_token=${token}; HttpOnly; path=/; Expires=${moment().add(
            1,
            "day"
          )}`
        );
        return res.status(201).json({ ...update, image });
      } catch (error) {
        return res.status(400).json(error);
      }
    })
  );

  
  export default function handler(req, res) {
    if(req.method === "DELETE"){
        return DELETE(req,res);
    }
    if(req.method === "PUT"){
        return PUT(req,res);
    }
    return res.status(405).json("method not allowed");
  }
  
