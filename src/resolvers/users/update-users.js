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
export const updateUsers = (req, res) => {
  const updateUsers = req.body;
  users = users.map((user) =>
    user.id === updateUsers.id ? updateUsers : user
  );
  res.send("user uptaded succesfully!");
};
