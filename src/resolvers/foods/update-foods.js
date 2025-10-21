import { foodModel } from "../../model/food-model.js";

export const updateFoods = async (req, res) => {
  await foodModel.findByIdAndUpdate(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });

  res.send("food uptaded succesfully!");
};
