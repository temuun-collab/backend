import { foodCategoryModel } from "../../model/food-category-model.js";
import { foodModel } from "../../model/food-model.js";

export const getFoodCategory = async (req, res) => {
  const dbFoods = await foodCategoryModel.find();
  const categories = await Promise.all(
    dbFoods.map(async (cur) => {
      const foods = await foodModel.find({ category: cur._id });
      return {
        _id: cur._id,
        categoryName: cur.categoryName,
        category: cur.categoryName,
        food: foods.length,
      };
    })
  );
  res.status(200).json(categories);
};
