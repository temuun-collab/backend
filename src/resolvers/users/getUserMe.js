import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
export const getMe = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = jwt.verify(token, "secret-key");
  const users = await userModel.find({ _id: id });
  res.status(200).json(users);
};
