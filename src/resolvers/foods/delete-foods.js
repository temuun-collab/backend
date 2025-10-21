import { foodModel } from "../../model/food-model.js";

export const deleteFoods = async (req, res) => {
  await foodModel.findByIdAndDelete(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("food deleted succesfully!");
};
