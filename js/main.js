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
  alert("Hola " + nombreIngresado);
}
solicitarNombre();
function solicitarMail() {
  let mailIngresado = prompt("Ingrese su Mail");
  alert("Su mail es " + mailIngresado);
}
solicitarMail();

function solicitarProducto() {
  let productoIngresado = prompt("Selecccione el producto que desea: Cuadro, Florero, Lampara, Jarron, Espejo");
  alert("El Producto seleccionado es " + productoIngresado);
}
/* Productos con descuentos */

class Producto{
  constructor (nombre,precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat (precio);
    this.vendido = false;
    
  }
  descuento (){
    this.precio = this.precio - (this.precio * 0,10);
 }
}
const productos = [];
productos.push(new Producto ("Cuadro", "3450"));
productos.push(new Producto("Florero", "560"));
productos.push(new Producto("Lampara", "900"));
productos.push(new Producto("Jarron", "2800"));
productos.push(new Producto("Espejo", "1500"));
console.log(productos);


for (const Producto of productos) {
  Producto.descuento();
  console.log( " " + Producto.nombre + " : $" + Producto.precio);
alert( " " + Producto.nombre + " : $" + Producto.precio);
 }
  

solicitarProducto();
 alert("Solo acepta pago por debito, al ser producto seleccionado")







