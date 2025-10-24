import { userModel } from "../../model/user-model.js";
export const getUsers = async (req, res) => {
  const dbUsers = await userModel.find().populate([
    "orderedFoods",
    {
      path: "orderedFoods.foodOrderItems",
      populate: "food",
    },
    // {
    //   path: "orderedFoods.foodOrderItems.food",
    //   populate: {
    //     path: "category",
    //   },
    // },
  ]);
  res.status(200).json(dbUsers);
};
