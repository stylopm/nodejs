const colores = require('./colores.js');

console.log('Variable');
console.log(colores);

console.log('-----------');
console.log('Recorrido');
console.log('-----------');
colores.forEach(
    color => {
        console.log(color);
    }
);