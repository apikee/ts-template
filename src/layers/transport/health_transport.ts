import { handler } from "../../config/handler";
import { Transport } from "./transport";

const pingHandler = (t: Transport) =>
  handler(async (_, res) => {
    return res.success("pong");
  });

export const setupHealthTransport = (t: Transport) => {
  t.app.get("/ping", pingHandler(t));
};
