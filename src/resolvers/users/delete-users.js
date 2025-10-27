import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
export const deleteUsers = async (req, res) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, "secret-key");

    await userModel.findByIdAndDelete(req.body.id);
    res.send("user deleted succesfully!");
  } catch (err) {
    res.status(401).send("Unauthorization");
  }
};
