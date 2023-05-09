import express, { Express } from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import loginRoute from "./routes/auth.route";

const main = () => {
  const app: Express = express();
  const PORT: number = 5000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", loginRoute);  

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

main();
