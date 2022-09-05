import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { environment } from "../../config/environment";
import { handler } from "../../config/handler";
import { responses } from "../../middlewares/responses";
import { Service } from "../service/service";
import { setupHealthTransport } from "./health_transport";

export class Transport {
  app: Application = express();

  constructor(public service: Service) {
    this.setupMiddlewares();
    this.setupRoutes();
    this.listen();
  }

  setupMiddlewares = () => {
    this.app.use(responses);
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(morgan("dev", { skip: (req) => req.method === "OPTIONS" }));
  };

  setupRoutes = () => {
    setupHealthTransport(this);

    this.app.use(handler((_, res) => res.sendStatus(404)));
  };

  listen = () => {
    return this.app.listen(environment.port, () =>
      console.log(`Template is running on port ${environment.port}`)
    );
  };
}
