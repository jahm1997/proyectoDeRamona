const { Router } = require("express");
const { getCliente, postCliente } = require("../services/serviceCliente.js");

const activityRouter = Router();

activityRouter.get("/clientes", getCliente);
activityRouter.post("/clientes", postCliente);
//activityRouter.delete("/activity", deleteActivity);

module.exports = activityRouter;
