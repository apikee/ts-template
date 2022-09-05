import { Request, Response, NextFunction } from "express";

export const handler =
  (callback: (req: Request, res: Response, next?: NextFunction) => any) =>
  (req: Request, res: Response, next?: NextFunction) => {
    try {
      return callback(req, res, next);
    } catch (error) {
      return res.error("process failed");
    }
  };
