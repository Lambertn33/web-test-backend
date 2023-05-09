import express, { Express } from "express";
import bodyParser from "body-parser";
import loginRoute from "./routes/auth.route";
import cors  from "cors";
import * as dotenv from 'dotenv';

dotenv.config();

const main = () => {
  const app: Express = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  app.use("/api", loginRoute);  

  app.listen(process.env.SYSTEM_PORT, () => {
    console.log(`listening on port ${process.env.SYSTEM_PORT}`);
  });
};

main();
