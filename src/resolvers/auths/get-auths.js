import { authModel } from "../../model/auth-model";
export const getAuths = async (req, res) => {
  const dbUsers = await authModel.find();
  res.status(200).json(dbUsers);
};