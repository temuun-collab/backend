import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AuthSchema = new Schema({
  id: { type: ObjectId, require: true },
  name: String,
  email: String,
  phone: Number,
});
export const authModel = mongoose.model("auth", AuthSchema);
