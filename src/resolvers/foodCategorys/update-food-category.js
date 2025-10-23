import { foodCategoryModel } from "../../model/food-category-model.js";
export const updateFoodCategory = async (req, res) => {
  await foodCategoryModel.findByIdAndUpdate(req.body.id, {
    categoryName: req.body.categoryName,
  });
  res.send("foodCategory update succesfully!");
};
