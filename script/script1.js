//ventana de cerrar sesion
function confirmarCerrarSesion() {
  if (confirm("¿Estás seguro de cerrar sesión?")) {

    window.location.href = "index9.html";
  }
}

function irAlInicio() {
  window.location.href = "index1.html";
}

function redirectToIndex() {

  window.location.href = "index4.html";
}



// capturar el formulario nitform
document.getElementById("nitForm").addEventListener("submit", function (event) {
  event.preventDefault();


  $('#successModal').modal('show');
});

