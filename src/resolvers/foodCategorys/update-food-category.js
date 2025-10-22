import { foodCategoryModel } from "../../model/food-category-model";
export const deleteFoodCategory = async (req, res) => {
  await foodCategoryModel.findByIdAndDelete(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("auth deleted succesfully!");
};