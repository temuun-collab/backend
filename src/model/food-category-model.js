import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodCategorySchema = new Schema({
  id: { type: ObjectId, require: true },
  categoryName: String,
  createdAt: Date,
  updateAt: Date,
});
export const foodCategoryModel = mongoose.model(
  "foodCategory",
  FoodCategorySchema
);
