import mongoose from "mongoose";
import { environment } from "../../config/environment";
import { logger } from "../../config/logger";

export class Repository {
  constructor() {
    this.connect();
  }

  connect = async () => {
    await mongoose.connect(environment.mongoConnection).catch((err) => {
      logger.error(err);
      throw "database connection error";
    });
  };
}
