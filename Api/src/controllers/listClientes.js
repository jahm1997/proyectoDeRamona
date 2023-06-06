const Clientes = require("../models/Clientes");
module.exports = async () => {
  const clientes = await Clientes.find();
  // .then(() => {
  //   console.log('Producto creado exitosamente');
  // })
  // .catch((error) => {
  //   console.error('Error al crear el producto:', error);
  // });
  return clientes;
};
