import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("Hello Hack Heros!");
});

app.listen(3000, () => {
  console.log("server is running");
});
