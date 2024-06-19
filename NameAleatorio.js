const nombres = ["Luis", "Heyder", "Jesús", "Eduardo", "Yussif", "Kairós", "Wendy", "Andrea", "Rommel","Kevin"];
const apellidos = ["Ek", "Ix", "Chan", "Flores", "Graniel", "Lizarraga", "Nóvelo", "Arellano", "Canepa", "Montero"];


function generarRandom() {
  const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
  document.getElementById("random-nombre").textContent = `${nombreAleatorio} ${apellidoAleatorio}`;
}

