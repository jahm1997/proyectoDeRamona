const Cortes = require("../models/Cortes");
const sendSMS = require("./sms");
module.exports = async (data) => {
  console.log(data);

  const newProduct = new Cortes(data);

  const response = newProduct.save();
  // .then(() => {
  //   console.log('Producto creado exitosamente');
  // })
  // .catch((error) => {
  //   console.error('Error al crear el producto:', error);
  // });
  return response;
};
