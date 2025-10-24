import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodCategorySchema = new Schema({
  id: { type: ObjectId, require: true },
  categoryName: String,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const foodCategoryModel = mongoose.model(
  "foodCategory",
  FoodCategorySchema
);
