const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  costo: {
    type: Number,
    required: true,
  },
  // ... otros campos del producto
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
