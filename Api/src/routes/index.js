const { Router } = require("express");
// Importar todos los routers;
const corte = require("./corte.js");
const cliente = require("./cliente.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", corte);
router.use("/", cliente);

module.exports = router;
