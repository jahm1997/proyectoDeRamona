const Cortes = require("../models/Cortes");
module.exports = async () => {
  const cortes = await Cortes.find();
  // .then(() => {
  //   console.log('Producto creado exitosamente');
  // })
  // .catch((error) => {
  //   console.error('Error al crear el producto:', error);
  // });
  return cortes;
};
