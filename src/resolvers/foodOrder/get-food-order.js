import { foodOrderModel } from "../../model/food-order-model.js";
export const getFoodOrder = async (req, res) => {
  const dbFoods = await foodOrderModel.find();
  res.status(200).json(dbFoods);
};
