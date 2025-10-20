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
export const getUsers = (req, res) => {
  res.status(200).json(users);
};
