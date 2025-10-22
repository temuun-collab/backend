import express from "express";
import { router } from "./src/routes/users.js";
import mongoose, { Mongoose } from "mongoose";
import { foodRouter } from "./src/routes/foods.js";

import { foodCategoryRouter } from "./src/routes/foodsCategory.js";
import { foodOrderRouter } from "./src/routes/foodsOrder.js";
const app = express();
const PORT = 8000;
app.use(express.json());

app.use("/users", router);
app.use("/foods", foodRouter);

app.use("/foodsCategory", foodCategoryRouter);
app.use("/foodsOrder", foodOrderRouter);
mongoose
  .connect("mongodb+srv://temuun88:temuun88@cluster0.v7wnzxs.mongodb.net/")
  .then(() => console.log("connect!"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

// model => food-model.js
// routes => food-routes.js
// resolvers => create. update, read, delete
