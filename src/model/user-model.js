import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
  id: { type: ObjectId, require: true },
  name: { type: Number, require: true },
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: String,
  orderedFoods: ObjectId,
  TextTrackList: Date,
  isVerified: Boolean,
  createdAt: Date,
  updateAt: Date,
});
export const userModel = mongoose.model("user", UserSchema);
