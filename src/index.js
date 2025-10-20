import express from "express";
import fs from "fs";
const app = express();
const PORT = 8000;
let users = fs.readFile(text.json);
app.use(express.json());
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send("new user added!");
});
app.put("/users", (req, res) => {
  const updateUsers = req.body;
  users = users.map((user) =>
    user.id === updateUsers.id ? updateUsers : user
  );
  res.send("user uptaded succesfully!");
});
app.delete("/users", (req, res) => {
  const updateUsers = req.body;
  users = users.filter((user) => user.id !== updateUsers.id);
  res.send("user deleted succesfully!");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
