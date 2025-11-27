// Lista de productos
const productos = [
{
nombre: 'Control por Voz',
descripcion: 'Controla tu hogar con comandos de voz.',
precio: 'Bs. 380',
imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
},
{
nombre: 'Sensor IoT',
descripcion: 'Detecta movimiento y automatiza funciones.',
precio: 'Bs. 120',
imagen: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5'
},
{
nombre: 'Cerradura Biométrica',
descripcion: 'Abre tu puerta con huella digital.',
precio: 'Bs. 650',
imagen: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad'
},
{
nombre: 'Luces Inteligentes',
descripcion: 'Controla luces desde tu teléfono.',
precio: 'Bs. 95',
imagen: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5'
}
];


// Insertar productos dinámicamente
document.addEventListener('DOMContentLoaded', () => {
const grid = document.getElementById('productGrid');


productos.forEach(prod => {
const card = document.createElement('div');
card.classList.add('card');


card.innerHTML = `
<img src="${prod.imagen}" alt="${prod.nombre}">
<div class="info">
<h3>${prod.nombre}</h3>
<p>${prod.descripcion}</p>
<p class="precio">${prod.precio}</p>
</div>
`;


grid.appendChild(card);
});
});


// Modo oscuro / claro
const toggle = document.getElementById('modeToggle');
const body = document.body;


body.classList.add('light');


toggle.addEventListener('click', () => {
if (body.classList.contains('light')) {
body.classList.replace('light', 'dark');
toggle.textContent = '☀️';
} else {
body.classList.replace('dark', 'light');
toggle.textContent = '🌙';
}
});