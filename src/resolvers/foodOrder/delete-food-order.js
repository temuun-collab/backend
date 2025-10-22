import { foodOrderModel } from "../../model/food-order-model.js";
export const deleteFoodOrder = async (req, res) => {
  await foodOrderModel.findByIdAndDelete(req.body.id, {
    user: req.body.user,
    totalPrice: Number(req.body.totalPrice),
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
  });
  res.send("foodOrder deleted succesfully!");
};
