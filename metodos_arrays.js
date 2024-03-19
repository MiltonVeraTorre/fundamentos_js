// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});


// Includes
let resultado = meses.includes('Diciembre');

// Some ideal para arreglo de objetos, saber si existe en el arreglo
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular PRO'
})

// Reduce

//Total es una variable a la que se le va sumando 
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio //Aqui se esta haciendo una suma a total
}, 0);// El 0 representa el valor inicial de total


// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});



console.log(resultado);
