import { foodModel } from "../../model/food-model";
export const findIdFood = async (req, res) => {
  console.log(req.params.id);

  const dbFindId = await foodModel.find({
    category: req.params.id,
  });

  res.status(200).json(dbFindId);
};
