import { authModel } from "../../model/auth-model";
export const updateAuths = async (req, res) => {
  await authModel.findByIdAndUpdate(req.body.id, {
    email: req.body.email,
    phone: req.body.phone,
  });

  res.send("auth uptaded succesfully!");
};