import { foodModel } from "../../model/food-model.js";

export const createFoods = async (req, res) => {
  await foodModel.create({
    foodName: req.body.foodName,
    price: Number(req.body.price),
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  res.send("food create succesfully!");
};
