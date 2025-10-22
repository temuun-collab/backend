import { foodModel } from "../../model/food-model.js";

export const updateFoods = async (req, res) => {
  await foodModel.findByIdAndUpdate(req.body.id, {
    foodName: req.body.foodName,
    price: Number(req.body.price),
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  res.send("food uptaded succesfully!");
};
