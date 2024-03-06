import { Schema, model, models } from "mongoose";

export interface User {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  palnId?: number;
  creditBalance?: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  palnId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
