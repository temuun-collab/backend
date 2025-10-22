import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodOrderSchema = new Schema({
  id: { type: ObjectId, require: true },
  user: ObjectId,
  totalPrice: Number,
  foodOrderItems: String,
  status: String,
  createdAt: Date,
  updateAt: Date,
});
export const foodOrderModel = mongoose.model("foodOrder", FoodOrderSchema);
