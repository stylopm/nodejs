// destructuracion de variables
// regla es que las variables se llamen igual a como 
// fueron exportadas
const { edad, libros, nombre, saludo } = require('./libros.js');
console.log(` ${nombre} + ${libros} - ${edad}`);
saludo();