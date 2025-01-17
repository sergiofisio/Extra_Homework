import { NextFunction, Request, Response } from "express";

const express = require("express");

const Routes = express();

Routes.use((req: Request, _: Response, next: NextFunction) => {
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log("url: ", url);
  console.log("metodo: ", req.method);
  next();
});

Routes.use(require("./routes/openRoute"));

export default Routes;
