import { foodCategoryModel } from "../../model/food-category-model.js";
export const deleteFoodCategory = async (req, res) => {
  await foodCategoryModel.findByIdAndDelete(req.body.id, {
    categoryName: req.body.categoryName,
  });
  res.send("foodCategory deleted succesfully!");
};
