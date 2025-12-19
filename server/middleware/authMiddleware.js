import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.sendStatus(403);
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  next();
};
