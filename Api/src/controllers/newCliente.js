const Clientes = require("../models/Clientes");
const sendSMS = require("./sms");
module.exports = async (data) => {
  console.log(data);
  const newCliente = new Clientes(data);

  const response = newCliente.save();
  sendSMS(data);
  // .then(() => {
  //   console.log('Producto creado exitosamente');
  // })
  // .catch((error) => {
  //   console.error('Error al crear el producto:', error);
  // });
  return response;
};
