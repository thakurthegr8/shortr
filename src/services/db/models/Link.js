import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new Schema(
  {
    link_for: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    value: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);



const Link = mongoose.models.linkifylinks || model("linkifylinks", UserSchema);

export default Link;