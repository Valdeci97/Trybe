const userNameValidator = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length < 3) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;
  if (
    !email ||
    !email.includes('@') ||
    !email.includes('.com')) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 3 || password.length > 8) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
};



module.exports = {
  userNameValidator,
  emailValidator,
  passwordValidator,
};
