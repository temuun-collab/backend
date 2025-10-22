import { foodOrderModel } from "../../model/food-order-model.js";
export const updateFoodOrder = async (req, res) => {
  await foodOrderModel.findByIdAndUpdate(req.body.id, {
    user: req.body.user,
    totalPrice: Number(req.body.totalPrice),
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
  });
  res.send("foodOrder update succesfully!");
};
