import express from "express";
import { usersRouter } from "./users/users.router";

export const v1Router = express.Router();

v1Router.get("/health", (req, res) => {
  res.send("OK");
});

v1Router.use("/users", usersRouter);
