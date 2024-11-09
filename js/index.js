/* ============================ entregable 1 ========================================
alert("Bienvenido a la calculadora de ganancia para su negocio")

negocioNombre = prompt("Cuentanos, ¿como se llama tu negocio?")

console.log(negocioNombre)





let precioProducto = 0
let sumatoriaProducto = 0

function calcularPorcentaje(precio, porcentajeSumatorio){
    const porcentaje = (precio * porcentajeSumatorio) /100
    const precioConPorcentaje = precio + porcentaje

    return precioConPorcentaje
}





function pedirProducto(mensaje) {

    let producto = parseInt(prompt(mensaje))
     while (isNaN(producto) || producto < 0) {
        producto = parseInt(prompt(mensaje))
    }


    console.log(producto)
    return producto
}




function simuladorPreciofinal () {
    
    precioProducto = parseFloat(prompt("Ingrese su precio a calcular, si tiene decimales, usar '.' "))
        
        console.log(precioProducto.toFixed(2))
        
    sumatoriaProducto = pedirProducto("¿Cuanto es el porcentaje que desea sumarle a su producto?")

    let precioFinal = calcularPorcentaje(precioProducto, sumatoriaProducto)


            alert('El precio de su producto es $' + precioProducto)
            alert('La ganancia que usted quiere para su produto es $' + sumatoriaProducto)
            alert('El precio final es $' + precioFinal)
}   


simuladorPreciofinal()

============================ entregable 1 ========================================

const arrayDeObjetos = [
    {
        producto: "ventilador",
        precio: 12000,
        estado: "nuevo",
    },

    {
        producto: "aire acondicionado",
        precio: 50000,
        estado: "nuevo",
    },

    {
        producto: "calefactor",
        precio: 20000,
        estado: "nuevo",
    },   

    {
        producto: "estufa",
        precio: 16000,
        estado: "nuevo",
    },       
    
    {
        producto: "ventilador",
        precio: 8000,
        estado: "usado",
    },

    {
        producto: "aire acondicionado",
        precio: 30000,
        estado: "usado",
    },

    {
        producto: "calefactor",
        precio: 13000,
        estado: "usado",
    },   

    {
        producto: "estufa",
        precio: 8000,
        estado: "usado",
    },   
];



for (let i = 0; i <arrayDeObjetos.length; i++) {
    console.log("Producto: " + arrayDeObjetos[i].producto)
    console.log("Precio: " + arrayDeObjetos[i].precio)
    console.log("Estado: " + arrayDeObjetos[i].estado)
}


let buscador = prompt("Que producto desea buscar?").toString()

const filtradoUsuario = arrayDeObjetos.find((Element) => Element.producto === buscador)

console.log(filtradoUsuario)

if (filtradoUsuario) {
    alert("El producto seleccionado es " + filtradoUsuario.producto);
  } 
    else {
    alert("El producto que desea no esta disponible");
  }
*/


/* =========================  */








const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function renderizarProductos(array) {

    contenedorProductos.innerHTML = ""

    array.forEach(element => {

        const div = document.createElement("div")

        div.innerHTML = `
        <h3>${element.nombre}</h3>
        <p>Precio: $${element.precio}</p>

        <button id="agregar${element.id}">Agregar</button>
        `

        contenedorProductos.append(div)

        const botonAgregar = document.getElementById(`agregar${element.id}`)

        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(element.id)
            // playAddToCartSound()
        })
    });

}

function agregarAlCarrito(productoId) {

    const product = productos.find(e => e.id === productoId)
    const cartItem = carrito.find(e => e.id === productoId)

    if (cartItem) {
        cartItem.cantidad += 1
    } else {
        carrito.push({ ...product, cantidad: 1 })
    }

guardarCarrito()
}



/*function playAddToCartSound() {
    const audio = new Audio("../sonidos/sonidosDeCompra.mp3"); 
    audio.play();
    
}*/





document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos)
})

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}