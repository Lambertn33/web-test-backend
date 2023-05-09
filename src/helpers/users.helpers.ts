import jwt from "jsonwebtoken";
import { UserInterface } from "../interfaces/users.inteface";

export function generateToken(user: UserInterface) {
  const testSecretKey = "testSecretKey";
  const token: string = jwt.sign(
    {
      authenticatedUser: {
        names: user.names,
        email: user.email,
      },
    },
    testSecretKey,
    { expiresIn: "1h" }
  );
  return token;
}
