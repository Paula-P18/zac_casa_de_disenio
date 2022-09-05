 /* Proyecto Carrito de compras */
  let stockProductos = [
    {id: 1,nombre: "Cuadro Minimalista",precio: 1650,img: "../img/cuadro-minimalista.webp"},
    { id: 2, nombre: "Cuadro", precio: 950, img: "../img/cuadro.webp" },
    { id: 3, nombre: "Florero", precio: 1390, img: "../img/florero.jpg" },
    { id: 4,nombre: "Plato Nacar",precio: 2569,img: "../img/plato-nacar.webp"},
    { id: 5, nombre: "Mueble Cuna", precio: 5381, img: "../img/mueble-cuna.jpg.jpg" },
    { id: 6, nombre: "Jarrón", precio: 560, img: "../img/jarron.webp" },
    { id: 7, nombre: "Lampara", precio: 890, img: "../img/lampara.webp" },
    { id: 8,nombre: "Maceta diseño",precio: 3460,img: "../img/maceta-diseño.webp"},
    { id: 9, nombre: "Espejo", precio: 2139, img: "../img/espejo.jpg" },
  ];
  
  const contenedorProductos = document.getElementById("contenedor-productos");
  console.log(contenedorProductos);
  const contenedorCarrito = document.getElementById("carrito-contenedor");
  const botonVaciar = document.getElementById("vaciar-carrito");
  const contadorCarrito = document.getElementById("contadorCarrito");
  const cantidad = document.getElementById("cantidad");
  const precioTotal = document.getElementById("precioTotal");
  const cantidadTotal = document.getElementById("cantidadTotal");
  

  const carrito = JSON.parse(localStorage.getItem('carrito')) || []
  
  botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
  });
  
  
  stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src=${producto.img} class="" alt= "">
      <div ><h3>${producto.nombre}</h3>
      <p class="precioProducto">Precio:$ ${producto.precio}</p> </div>
      
      <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
      `;
    contenedorProductos.appendChild(div);
  
    const boton = document.getElementById(`agregar${producto.id}`);
  
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
    
  });
  
  const agregarAlCarrito = (prodId) => {
      //add to cart
      const producto = stockProductos.find((prod) => prod.id === prodId);
      const item = carrito.find((prod) => prod.id === prodId);
      if (item) {
          item.cantidad += 1;
          
      } else {
          carrito.push({
              ...producto,
              cantidad: 1,
              
          });
          
         }Swal.fire({
          title: 'Se agrego con exito al carrito.',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        });
         
      actualizarCarrito();
  }
  
  const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
  
    const indice = carrito.indexOf(item);
  
    carrito.splice(indice, 1);
    
    
    actualizarCarrito();
    console.log(carrito);
  };
  
  const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
  
    carrito.forEach((prod) => {
      const div = document.createElement("div");
      div.className = "productoEnCarrito";
      div.innerHTML = `
          <p>${prod.nombre}</p>
          <p>Precio:$${prod.precio}</p>
          <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
          <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
          `;
  
      contenedorCarrito.appendChild(div);
  
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  
    contadorCarrito.innerText = carrito.length;
  
    console.log(carrito);
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  };
  