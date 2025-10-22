import { foodCategoryModel } from "../../model/food-category-model";
export const creatFoodCategory = async (req, res) => {
  await foodCategoryModel.create({
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("auth create succesfully!");
};