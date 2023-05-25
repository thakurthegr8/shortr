import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const LinkSchema = new Schema(
  {
    link_for: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title:{
      type:Schema.Types.String,
    },
    enabled:{
      type:Schema.Types.Boolean,
      default:true
    },
    value: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);



const Link = mongoose.models.linkifylinks || model("linkifylinks", LinkSchema);

export default Link;