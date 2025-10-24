import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
  id: { type: ObjectId, require: true },
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
  },
  orderedFoods: {
    type: ObjectId,
    ref: "foodOrder",
  },
  TextTrackList: { type: Date, required: true, default: Date.now },
  isVerified: Boolean,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const userModel = mongoose.model("user", UserSchema);
