import mongoose from "mongoose";

const CustomAppearanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "linkifyuser", // Reference to the User schema
    required: true,
  },
  background: {
    type: String,
    default: "#fff", // Default background color (Tailwind CSS class)
  },
  text_color: {
    type: String,
    default: "#000",
  },
  linkTile: {
    backgroundColor: {
      type: String,
      default: "bg-gray-200", // Default link tile background color (Tailwind CSS class)
    },
    textColor: {
      type: String,
      default: "text-gray-800", // Default link tile text color (Tailwind CSS class)
    },
    roundness: {
      type: String,
      enum: ["rounded", "rounded-md", "rounded-lg", "rounded-none"],
      default: "rounded", // Default roundness level for link tiles
    },
    hardShadow: {
      type: Boolean,
      default: false, // Default value for hard shadow
    },
    softShadow: {
      type: Boolean,
      default: false, // Default value for soft shadow
    },
    outline: {
      type: String,
      default: "outline-none", // Default outline style for link tiles (Tailwind CSS class)
    },
    fontColor: {
      type: String,
      default: "text-gray-800", // Default font color for link tiles (Tailwind CSS class)
    },
    // Add more styling properties as needed
  },
});

const CustomAppearance =
  mongoose.models.linkify_custom_appearance ||
  mongoose.model("linkify_custom_appearance", CustomAppearanceSchema);

export default CustomAppearance;
