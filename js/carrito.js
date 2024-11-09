const contenedorCarrito = document.getElementById("contenedorCarrito")
const totalCarrito = document.getElementById("totalCarrito")
const carrito = JSON.parse(localStorage.getItem("carrito")) || []


const actualizarCarrito = () => {

    carrito.forEach((elm) => {
        const div = document.createElement("div")
        div.classList.add(productos)
        
        div.innerHTML = `
        <h3>${elm.nombre}</h3> 
        <p>${elm.precio}<p/p>
        <p>Cantidad ${elm.cantidad}<p/p>
        `

        contenedorCarrito.append(div)
    });


}


