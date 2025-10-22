import { foodCategoryModel } from "../../model/food-category-model.js";
export const getFoodCategory = async (req, res) => {
  const dbFoods = await foodCategoryModel.find();
  res.status(200).json(dbFoods);
};
