import express from "express";
import allClasses from "../controllers/classRoms/allClasses";
import addClass from "../controllers/classRoms/add";
import updateClassRoom from "../controllers/classRoms/update";
import deleteClass from "../controllers/classRoms/delete";
import classe from "../controllers/classRoms/classe";

const openRoute = express.Router();

openRoute.get("/", (_, res) => {
  try {
    res.json({ init: true, message: "Iniciado" });
  } catch (error: any) {
    res.status(500).send({ init: false, message: error.message });
  }
});

openRoute.get("/classes", allClasses);
openRoute.get("/classe/:id", classe);
openRoute.post("/classes", addClass);
openRoute.put("/classes/:id", updateClassRoom);
openRoute.delete("/classes/:id", deleteClass);

module.exports = openRoute;
