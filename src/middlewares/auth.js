const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ error: "token not provided" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.json({ error: "token error" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer/.test(scheme)) {
    return res.json({ error: "token malformatted" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.json({ error: "token invalid" });
    }

    req.userId = decoded.id

    return next()
  });
};
