const createClient = require("../controllers/newCliente.js");
const listClientes = require("../controllers/listClientes.js");

const getCliente = async (req, res) => {
  try {
    const response = await listClientes();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postCliente = async (req, res) => {
  try {
    const response = await createClient(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCliente,
  postCliente,
};
