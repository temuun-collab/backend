import { foodModel } from "../../model/food-model.js";

export const creatFoods = async (req, res) => {
  await foodModel.create({
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("food create succesfully!");
};
