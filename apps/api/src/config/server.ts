import cors from "cors";
import express, { type Express } from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import morgan from "morgan";
import { v1Router } from "../v1/v1.router";

export const createServer = (): Express => {
  const app = express();
  app.disable("x-powered-by");

  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  // File Upload Middleware
  app.use(fileUpload());

  app.get("/", (_, res) => {
    return res.json({ ok: true });
  });
  app.get("/status", (_, res) => {
    return res.json({ ok: true });
  });

  app.use("/v1", v1Router);

  return app;
};
