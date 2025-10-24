import { foodOrderModel } from "../../model/food-order-model.js";
export const getFoodOrder = async (req, res) => {
  const dbFoods = await foodOrderModel.find().populate([
    "user",
    "foodOrderItems.food",
    {
      path: "foodOrderItems.food",
      populate: {
        path: "category",
      },
    },
  ]);
  res.status(200).json(dbFoods);
};
