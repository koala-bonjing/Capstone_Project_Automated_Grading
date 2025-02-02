import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 1000,
    httpOnly: true, // security
    sameSite: true, //securit
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
