import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const FoodOrderItem = new Schema({
  food: { type: Schema.ObjectId, require: true, ref: "food" },
  quantity: { type: Number, require: true },
});
const FoodOrderSchema = new Schema({
  id: ObjectId,
  user: {
    type: ObjectId,
    ref: "user",
  },
  totalPrice: Number,
  foodOrderItems: [FoodOrderItem],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const foodOrderModel = mongoose.model("foodOrder", FoodOrderSchema);
