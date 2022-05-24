const {colores, planetas, saludar} = require('./universo.js');

console.log('-----------');
console.log('Recorrido');
console.log('-----------');
colores.forEach(
    color => console.log(`El color es ${color}`)
);

console.log('-----------');
console.log('Recorrido planetas');
console.log('-----------');
planetas.forEach(
    planeta => console.log(`El planeta es ${planeta} `)
);

saludar();