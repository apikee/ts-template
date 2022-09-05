import winston from "winston";

export const logger = winston.createLogger({
  level: "error",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({
      filename: "persistence/error.log",
    }),
  ],
});
