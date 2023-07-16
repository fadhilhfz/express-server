const isAuthenticate = (req, res, next) => {
  console.log(req.session);
  //validate session
  if (!req.session.user) {
    res.redirect("/login");
    return;
  }

  next();
};

module.exports = isAuthenticate;
