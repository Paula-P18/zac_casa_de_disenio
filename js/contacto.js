/*  Formulario */
  let miFormulario = document.getElementById("formulario");
/* miFormulario.addEventListener("submit", validarFormulario); */
function validarFormulario (e){
  e.preventDefault();
  console.log("formulario Enviado");  
  
 }  
 
 async function enviarFormulario(ev) {
  
    ev.preventDefault();
   
    if (enviarFormulario.enviando) { return; }
    enviarFormulario.enviando = true;
    
    var form = document.querySelector("form");
    var result = document.querySelector(".form-msg");
    result.innerHTML = "Enviando, por favor espera...";

    var datos = new FormData(form);
    
    datos.append("otro-dato", "valor");
    
    var init = {
      method: form.method,
      body: datos
    };
    // petición ajax con fetch
    try {
      var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (response.ok) {
      
        var respuesta = await response.json();
        
        result.innerHTML = "Gracias por contactar con nosotros.";
        form.reset();
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      result.innerHTML = "Error al enviar el formulario: " + err.message;
    }
   
    enviarFormulario.enviando = false;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", enviarFormulario);
  });