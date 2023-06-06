const createCorte = require("../controllers/newCorte.js");
const listadocortes = require("../controllers/listCortes.js");

const getCorte = async (req, res) => {
  try {
    const response = await listadocortes();
    // const response = await createClient();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//----------------------------------- HANDLERS POST -----------------------------------\\
const postCorte = async (req, res) => {
  try {
    const response = await createCorte(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCorte,
  postCorte,
};
