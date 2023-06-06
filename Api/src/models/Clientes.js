const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  corte: {
    type: String,
    required: false,
  },
  costo: {
    type: Number,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  // ... otros campos del producto
});

const Clientes = mongoose.model("Clientes", clientSchema);

module.exports = Clientes;
