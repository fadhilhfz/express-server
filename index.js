const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const userRouter = require("./routers/userRouter");
const PORT = 3000;

//Static
app.use(express.static("public"));

//Session
app.use(
  session({
    name: "iniIdWoi",
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  const filePath = path.join(__dirname, "public", "login.html");
  res.sendFile(filePath);
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  req.session.user = { username };
  res.send(`Logged in as ${username}`);
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
