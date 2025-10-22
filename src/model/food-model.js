import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: { type: ObjectId, require: true },
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: ObjectId,
  createdAt: Date,
  updateAt: Date,
});
export const foodModel = mongoose.model("food", FoodSchema);
