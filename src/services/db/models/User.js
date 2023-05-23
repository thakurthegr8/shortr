import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    image: {
      type: Schema.Types.String,
      default: null,
    },
    verified: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (!update.password) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(update.password, salt);
    update.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.models.linkifyuser || model("linkifyuser", UserSchema);

export default User;