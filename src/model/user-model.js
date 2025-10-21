import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
  id: { type: ObjectId, require: true },
  name: { type: Number, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
});
export const userModel = mongoose.model("user", UserSchema);
