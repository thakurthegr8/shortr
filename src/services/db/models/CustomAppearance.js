import mongoose from "mongoose";

const CustomAppearanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "linkifyuser", // Reference to the User schema
    required: true,
  },
  background: {
    type: mongoose.Schema.Types.String,
    default: "#000000",
  },
  text_color: {
    type: mongoose.Schema.Types.String,
    default: "#ffffff",
  },
  linkTile: {
    backgroundColor: {
      type: mongoose.Schema.Types.String,
      default: "#ffffff",
    },
    roundness: {
      type: mongoose.Schema.Types.String,
      default: "rounded-none",
    },
    hardShadow: {
      type: mongoose.Schema.Types.Boolean,
      default: false, // Default value for hard shadow
    },
    softShadow: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    outline: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    fontColor: {
      type: mongoose.Schema.Types.String,
      default: "#000000",
    },
    shadowColor: {
      type: mongoose.Schema.Types.String,
      default: "#000000",
    },
  },
});

const CustomAppearance =
  mongoose.models.linkify_custom_appearance ||
  mongoose.model("linkify_custom_appearance", CustomAppearanceSchema);

export default CustomAppearance;
