import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodCategorySchema = new Schema({
  id: { type: ObjectId, require: true },
  name: String,
  email: String,
  phone: Number,
});
export const foodCategoryModel = mongoose.model("auth", FoodCategorySchema);
