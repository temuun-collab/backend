import { authModel } from "../../model/auth-model";
export const creatAuths = async (req, res) => {
  await authModel.create({
    email: req.body.email,
    phone: req.body.phone,
  });
  res.send("auth create succesfully!");
};
