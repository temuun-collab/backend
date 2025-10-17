import express from "express";
const app = express();
const PORT = 8000;

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "jhon",
    },
    {
      id: 2,
      name: "jhon",
    },
  ]);
});
app.post("/", (req, res) => {
  res.send("hello");
});
app.put("/", (req, res) => {
  res.send("hello");
});
app.delete("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
