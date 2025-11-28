import { foodOrderModel } from "../../model/food-order-model.js";
export const updateFoodOrder = async (req, res) => {
  await foodOrderModel.findByIdAndUpdate(req.body.id, {
    status: req.body.status,
  });
  res.send("foodOrder update succesfully!");
};
