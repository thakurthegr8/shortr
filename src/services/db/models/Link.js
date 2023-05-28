import mongoose, { model, Schema } from "mongoose";

const LinkSchema = new Schema(
  {
    link_for: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"linkifyuser"
    },
    title:{
      type:Schema.Types.String,
      required:true
    },
    enabled:{
      type:Schema.Types.Boolean,
      default:true
    },
    value: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);



const Link = mongoose.models.linkifylinks || model("linkifylinks", LinkSchema);

export default Link;