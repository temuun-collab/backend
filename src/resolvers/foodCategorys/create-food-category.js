import { foodCategoryModel } from "../../model/food-category-model.js";
export const createFoodCategory = async (req, res) => {
  await foodCategoryModel.create({
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("foodCategory create succesfully!");
};
