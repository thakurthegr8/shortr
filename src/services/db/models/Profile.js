import mongoose, { model, Schema } from "mongoose";
const ProfileSchema = new Schema(
  {
    profile_for: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "linkifyuser",
    },
    username: {
      type: Schema.Types.String,
      required: true,
      unique:true
    },
    bio: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true }
);

const Profile =
  mongoose.models.linkifyprofile || model("linkifyprofile", ProfileSchema);

export default Profile;
