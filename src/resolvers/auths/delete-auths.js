import { authModel } from "../../model/auth-model";
export const deleteAuths = async (req, res) => {
  await authModel.findByIdAndDelete(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("auth deleted succesfully!");
};