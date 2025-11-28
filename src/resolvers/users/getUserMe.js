import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
export const getUserMe = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { id } = jwt.verify(token, "secret-key");
    const users = await userModel.findById(id);
    res
      .status(200)
      .json({ message: "User found successfully", user: users, _id: id });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", err });
  }
};
