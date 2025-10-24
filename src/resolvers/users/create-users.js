import { userModel } from "../../model/user-model.js";
export const createUsers = async (req, res) => {
  await userModel.create({
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    role: req.body.role,
    orderedFoods: req.body.orderedFoods,
    isVerified: req.body.isVerified,
  });
  res.send("user create succesfully!");
};
