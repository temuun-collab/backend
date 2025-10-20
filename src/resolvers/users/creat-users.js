export let users = [
  {
    id: 1,
    name: "jhon",
  },
  {
    id: 2,
    " name": "jhon",
  },
];
export const creatUsers = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send("new user added!");
};
