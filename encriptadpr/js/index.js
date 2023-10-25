
function encriptar() {
    let texto = document.getElementById("texto").value;
    let div = document.getElementById("ocultar");
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            div.textContent = document.getElementById("texto").value;
            div.style.visibility = "hidden";

        }else{
            div.textContent = " ";
            div.style.visibility = "visible";
        }
}


