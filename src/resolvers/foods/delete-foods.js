import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";
export const deleteFoods = async (req, res) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, "secret-key");
    await foodModel.findByIdAndDelete(req.body.id);
    res.send("food deleted succesfully!");
  } catch (err) {
    res.status(401).send("Unauthorization");
  }
};
