import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: { type: ObjectId, require: true },
  name: String,
  email: String,
  phone: Number,
});
export const foodModel = mongoose.model("food", FoodSchema);
