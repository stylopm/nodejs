const coloresEjemplo = require('./colores.js');
console.log('Variable');
console.log(coloresEjemplo);
console.log('-----------');
console.log('Recorrido');
console.log('-----------');
coloresEjemplo.forEach(
    color => console.log(color)
);
