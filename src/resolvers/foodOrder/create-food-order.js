import { foodOrderModel } from "../../model/food-order-model.js";
export const createFoodOrder = async (req, res) => {
  await foodOrderModel.create({
    user: req.body.user,
    totalPrice: Number(req.body.totalPrice),
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
  });
  res.send("foodOrder create succesfully!");
};
