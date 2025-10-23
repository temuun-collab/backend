import { foodCategoryModel } from "../../model/food-category-model.js";

export const createFoodCategory = async (req, res) => {
  await foodCategoryModel.create({
    categoryName: req.body.categoryName,
  });

  res.send("foodCategory create succesfully!");
};
