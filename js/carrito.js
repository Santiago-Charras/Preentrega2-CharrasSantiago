const contenedorCarrito = document.getElementById("contenedorCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const cart = JSON.parse(localStorage.getItem("carrito")) || [];

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    cart.forEach((elm) => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <h3>${elm.nombre}</h3>
            <p>Precio: $${elm.precio}</p>
            <p>Cantidad: <span id="cantidad${elm.id}">${elm.cantidad}</span></p>
            <button id="borrar${elm.id}">Borrar</button>
        `;

        const btnSumar = document.createElement("button");
        btnSumar.textContent = "+";
        btnSumar.id = `sumar${elm.id}`;

        const btnRestar = document.createElement("button");
        btnRestar.textContent = "-";
        btnRestar.id = `restar${elm.id}`;

        div.append(btnSumar, btnRestar);
        contenedorCarrito.append(div);

        btnSumar.addEventListener("click", () => {
            elm.cantidad += 1;
            document.getElementById(`cantidad${elm.id}`).textContent = elm.cantidad;
            guardarCarrito();
            actualizarCarrito();
        });

        btnRestar.addEventListener("click", () => {
            if (elm.cantidad > 1) {
                elm.cantidad -= 1;
                document.getElementById(`cantidad${elm.id}`).textContent = elm.cantidad;
                guardarCarrito();
                actualizarCarrito();
            }
        });

        const boton = document.getElementById(`borrar${elm.id}`);
        boton.addEventListener("click", () => {
            borrarDelCarrito(elm.id);
            actualizarCarrito();
        });
    });

    totalCarrito.textContent = `Total: $${cart.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)}`;
};

const borrarDelCarrito = (id) => {
    const index = cart.findIndex((producto) => producto.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        guardarCarrito();
        actualizarCarrito();
    }
};

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(cart));
};

actualizarCarrito();
