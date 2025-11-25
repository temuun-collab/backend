import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
export const createUsers = async (req, res) => {
  const newUser = req.body;
  const password = newUser.password;
  const pass = await bcrypt.hash(password, 10);
  await userModel.create({
    email: req.body.email,
    password: pass,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    role: req.body.role,
    orderedFoods: req.body.orderedFoods,
    isVerified: req.body.isVerified,
    // email,
    // password: pass,
    // phoneNumber: phoneNumber || "",
    // role: "user",
    // isVerified: false,
    // orderedFoods: [],
    // address: "",
  });
  res.send("user create succesfully!");
};
