import { Request, Response } from "express";
import { AuthInputs, UserInterface } from "../interfaces/users.inteface";
import users from "../data/users.json";
import { generateToken } from "../helpers/users.helpers";

export const loginFunction = (req: Request, res: Response) => {
  const { email, password }: AuthInputs = req.body;
  const user = users.find((user) => user.email == email) as UserInterface;
  if (!user) return res.status(400).json({ message: "invalid email" });

  if (user.password !== password)
    return res.status(400).json({ message: " invalid password" });

  const token: string = generateToken(user);
  return res.status(200).json({ message: "auth success", token });
};
