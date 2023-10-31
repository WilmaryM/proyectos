
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
            div.textContent =  document.getElementById("texto").value;
            div.style.visibility = "visible";

        }else{
            div.textContent = " ";
            div.style.visibility = "hidden";
        }
    document.getElementById("texto").value = "";
}

function desencripta(){
    let texto = document.getElementById('texto').value;
    let div = document.getElementById("ocultar");
    let textoCifrado = texto
    .replace(/enter/gi, "enteer")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        div.textContent =  document.getElementById("texto").value;
        div.style.visibility = "visible";

    }else{
        div.textContent = " ";
        div.style.visibility = "hidden";
    }
    document.getElementById("texto").value = "";
    }

    /*boton copiar*/

    function copiar(){ 
        let div = document.getElementById('ocultar').value;
        let btn = document.getElementById('copyText');
    
                document.execCommand('selectAll');
                document.execCommand('copy');
                div.focus();
                if (div.textContent === "") {
                    div.textContent =  "Este es el texto copiado";
                    div.style.visibility = "visible";
                    }
                    else{
                        div.style.visibility = "hidden";
                            }           
            } 
                

