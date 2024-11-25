const productos = [
    {
        id: 1,
        nombre: "Criollos comunes",
        precio: 100
    },
    {
        id: 2,
        nombre: "Criollos hojaldre",
        precio: 80
    },
    {
        id: 3,
        nombre: "Facturas de crema",
        precio: 600
    },
    {
        id: 4,
        nombre: "Facturas de membrillo",
        precio: 600
    },

    {
        id: 5,
        nombre: "Medialunas",
        precio: 500
    },

    {
        id: 6,
        nombre: "Pan casero",
        precio: 1600
    },
]

const contenedorProductos = document.getElementById("contenedorProductos");

productos.map((element) => {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${element.nombre}</h3>
        <p>Precio: $${element.precio}</p>
    `;

    contenedorProductos.appendChild(div);

    div.addEventListener("click", () => {
        console.log(`Se agregó el producto con id: ${element.id}`)
    })
})