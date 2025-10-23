import { foodModel } from "../../model/food-model.js";

export const getFoods = async (req, res) => {
  const dbFoods = await foodModel.find().populate("category");
  res.status(200).json(dbFoods);
};
