const { Router } = require("express");
const { getCorte, postCorte } = require("../services/serviceCorte.js");

const CorteRouter = Router();

CorteRouter.get("/cortes", getCorte);
CorteRouter.post("/cortes", postCorte);
//CorteRouter.delete("/Corte", deleteCorte);

module.exports = CorteRouter;
