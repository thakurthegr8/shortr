import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const ProfileImageSchema = new Schema(
  {
    public_id: { type: Schema.Types.String, required: true },
    signature: { type: Schema.Types.String, required: true },
    url: { type: Schema.Types.String, required: true },
  },
  { timestamps: true }
);

const UserSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      trim:true,
      lowercase:true,
      validate:{
        validator:function(name){
          return /^[a-z\s]{5,30}$/.test(name)
        },
        message:"name should contain 5 to 30 characters with alphabets only"
      }
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      lowercase:true,
      validate:{
        validator:function(name){
          return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(name)
        },
        message:"invalid email format"
      }
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    image: {
      type: ProfileImageSchema,
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
  const User = this.constructor;
  User.findOne({ email: this.email })
  .then(existingUser => {
    if (existingUser) {
      throw new Error('email already exists.');
    }
  })
  .catch(err => {
    next(err);
  });
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
