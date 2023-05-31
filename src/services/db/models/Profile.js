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
      unique: true,
      trim: true,
      validate:{
        validator:function(name){
          return /^[a-z0-9._]+$/.test(name)
        },
        message:"username should contain lowercase letters, numbers, underscores or period"
      }
    },
    bio: {
      type: Schema.Types.String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Profile =
  mongoose.models.linkifyprofile || model("linkifyprofile", ProfileSchema);

export default Profile;
