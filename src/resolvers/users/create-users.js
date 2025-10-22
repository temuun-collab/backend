import { userModel } from "../../model/user-model.js";
export const createUsers = async (req, res) => {
  await userModel.create({
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("user create succesfully!");
};
