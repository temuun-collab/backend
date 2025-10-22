import { foodCategoryModel } from "../../model/food-category-model.js";
export const updateFoodCategory = async (req, res) => {
  await foodCategoryModel.findByIdAndUpdate(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("foodCategory update succesfully!");
};
