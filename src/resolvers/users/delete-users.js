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
export const deleteUsers = (req, res) => {
  const updateUsers = req.body;
  users = users.filter((user) => user.id !== updateUsers.id);
  res.send("user deleted succesfully!");
};
