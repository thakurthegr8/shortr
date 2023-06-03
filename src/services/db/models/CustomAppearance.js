import mongoose from "mongoose";

const CustomAppearanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "linkifyuser", // Reference to the User schema
    required: true,
  },
  background: {
    type: String,
  },
  text_color: {
    type: String,
  },
  linkTile: {
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    roundness: {
      type: String,
    },
    hardShadow: {
      type: Boolean,
      default: false, // Default value for hard shadow
    },
    softShadow: {
      type: Boolean,
    },
    outline: {
      type: String,
    },
    fontColor: {
      type: String,
    },
  },
});

const CustomAppearance =
  mongoose.models.linkify_custom_appearance ||
  mongoose.model("linkify_custom_appearance", CustomAppearanceSchema);

export default CustomAppearance;
