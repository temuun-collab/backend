import { foodModel } from "../../model/food-model.js";

export const deleteFoods = async (req, res) => {
  await foodModel.findByIdAndDelete(req.body.id, {
    foodName: req.body.foodName,
    price: Number(req.body.price),
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  res.send("food deleted succesfully!");
};
