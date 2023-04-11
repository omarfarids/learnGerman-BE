import mongoose from "mongoose";

// schema names
const USERS = "users_data";

// schema definitions
const UserSchema = mongoose.model(
  USERS,
  new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: { type: String, required: true },
    },
    { timestamps: true }
  )
);

export { UserSchema };
