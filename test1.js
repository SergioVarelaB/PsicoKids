var respuestas = new Array(10);

function respuesta(a, b) {
    respuestas[a] = b;
}

function resultado() {
    var resultado = 0;
    respuestas.forEach(element => {
        resultado += element;
    });
    if (resultado < 15) {
        document.getElementById("resultado").innerHTML = "Autoestima muy baja. La persona cree poco en sus posibilidades y que necesita estímulos para confiar más en sí mismo.";
    } else if (resultado > 15 && resultado <= 25) {
        document.getElementById("resultado").innerHTML = "Autoestima saludable. Cierto que se puede mejorar, pero cree en él mismo y en sus posibilidades. Sabe que puede mejorar pero que no está por debajo de nadie. ";
    } else if (resultado == 26) {
        document.getElementById("resultado").innerHTML = "Autoestima muy fuerte.";
    } else {
        document.getElementById("resultado").innerHTML = "Exceso de autoestima. Puede ser peligrosa, ya que puede denotar problemas para analizar la realidad o el caso de niños demasiado confiados y complacientes consigo mismos";
    }
}