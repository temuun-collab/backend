import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({ email: body.email });
  const result = await bcrypt.compare(body.password, user.password);
  if (result === true) {
    const token = jwt.sign({ email: user.email, id: user._id }, "secret-key");
    return res.send({ message: `User ${body.email} logged in!`, token: token });
  }
  res.send("Invalid email or password");
};
