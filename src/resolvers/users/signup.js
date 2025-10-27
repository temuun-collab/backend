import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    const body = req.body;
    const user = await userModel.findOne({ email: body.email });
    //   const result = await bcrypt.compare(body.password, user.password);
    if (user) {
      // const token = jwt.sign({ email: user.email, id: user._id }, "secret-key");
      return res.status(400).send("this email is registed");
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = new userModel({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.send("user registed succesfully");
  } catch (err) {
    res.status(401).send("error sign up");
  }
};
