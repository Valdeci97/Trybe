const btcToken = (req, res, next) => {
  const token = req.headers.authorization;
  const matcher = /^[\w]{12}$/;
  if (!token || matcher.test(token)) {
    return res.status(401).json({ message: "invalid token" });
  }

  next();
};

module.exports = btcToken;
