const express = require("express");
const router = express.Router();
const useAuth = require("../middlewares/auth");

router.use(useAuth);

router.get("/", (req, res) => {
  const { username } = req.session.user;
  console.log(req.sessionID);
  res.send(`This is ${username} page`);
});

module.exports = router;
