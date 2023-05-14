function cargarPagina(url) {
  window.location.href = url;
}

function aceptarPopup() {
  var audio = new Audio("masnolehanavisado.mp3");
  audio.play();
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

window.onload = function() {
  mostrarPopup();
}