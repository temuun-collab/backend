import { userModel } from "../../model/user-model.js";

export const updateUsers = async (req, res) => {
  await userModel.findByIdAndUpdate(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });

  res.send("user uptaded succesfully!");
};
