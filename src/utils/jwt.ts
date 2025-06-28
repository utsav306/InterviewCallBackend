import jwt from "jsonwebtoken";

export const generateToken = (id: number, role: string): string => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET!, { expiresIn: "1d" });
};
