import { userModel } from "../../model/user-model.js";
export const deleteUsers = async (req, res) => {
  await userModel.findByIdAndDelete(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("user deleted succesfully!");
};
