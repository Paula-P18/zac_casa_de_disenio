/* complementario */
/* let ingresarNumero = parseInt (prompt(" Ingresar Numero"))
for (let i= 1; i <= 10; i ++){
    let resultado = ingresarNumero * i;
    alert (ingresarNumero + "x" + i + "=" + resultado);
} */
/* Desafio simulador */
function saludar() {
  console.log("¡Bienvenido/a!");
  alert("¡Bienvenido/a! a ZAC casa de Diseño");
}
saludar();
function solicitarNombre() {
  let nombreIngresado = prompt("Ingrese su Nombre");
  alert("El nombre ingresado es " + nombreIngresado);
}
solicitarNombre();
function solicitarProducto() {
  let productoIngresado = prompt("Ingrese Producto");
  alert("El Producto ingresado es " + productoIngresado);
}
solicitarProducto();
const suma = (a, b) => {
  return a + b;
};
let precioProducto = 450;
alert("Su valor es $" + precioProducto);
const iva = (x) => {
  return x * 0.21;
};
alert("IVA: " + iva(precioProducto));
let nuevoPrecio = suma(precioProducto, iva(precioProducto));
console.log("El valor del Producto es" + nuevoPrecio);
alert(" El valor del producto total es " + nuevoPrecio);
