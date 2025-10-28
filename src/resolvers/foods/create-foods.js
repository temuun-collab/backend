import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const createFoods = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const tokenData = jwt.verify(token, "secret-key");

    if (tokenData.role !== "ADMIN") {
      return res.status(400).send("Permission denied");
    }

    await foodModel.create({
      foodName: req.body.foodName,
      price: Number(req.body.price),
      image: req.body.image,
      ingredients: req.body.ingredients,
      category: req.body.category,
    });
    res.send("food create succesfully!");
    console.log(tokenData);
  } catch (err) {
    res.status(401).send("Unauthorization");
  }
};
