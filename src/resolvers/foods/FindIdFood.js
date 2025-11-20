import { foodModel } from "../../model/food-model.js";
export const FindIdFood = async (req, res) => {
  console.log(req.params.id);

  const dbFindId = await foodModel.find({
    category: req.params.id,
  });

  res.status(200).json(dbFindId);
};
