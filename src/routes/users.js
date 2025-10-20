import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { creatUsers } from "../resolvers/users/creat-users.js";
import { updateUsers } from "../resolvers/users/update-users.js";
import { deleteUsers } from "../resolvers/delete-users.js";
let users = [
  {
    id: 1,
    name: "jhon",
  },
  {
    id: 2,
    " name": "jhon",
  },
];
export const router = express.Router();

router.get("/", getUsers);
router.post("/", creatUsers);
router.put("/", updateUsers);
router.delete("/", deleteUsers);
