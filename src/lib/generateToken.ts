import jwt from "jsonwebtoken";

export const generateToken = (nickname: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  return jwt.sign({ nickname }, secret, { expiresIn: "1h" });
};
