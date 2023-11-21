
function encriptar() {
let inputTexto = document.getElementById("texto").value;
let div = document.getElementById("ocultar");
    let textoCifrado = inputTexto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if (inputTexto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            div.textContent = textoCifrado;
            div.style.visibility = "visible";

        }else{
            div.textContent = " ";
            div.style.visibility = "hidden";
        }
    document.getElementById("texto").value = "";
}

function desencripta(){
let inputTexto = document.getElementById("texto").value;
let div = document.getElementById("ocultar");
    let textoDesencriptado = inputTexto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (inputTexto.length != 0) {
        document.getElementById("texto").value = textoDesencriptado;
        div.textContent = textoDesencriptado;
        div.style.visibility = "visible";

    }else{
        div.textContent = " ";
        div.style.visibility = "hidden";
    }
    document.getElementById("texto").value = "";
    }

    /*boton copiar*/

    function copiar(){ 
        let textoCopiado = document.getElementById('ocultar');
        navigator.clipboard.writeText(textoCopiado.textContent)

        let btn = document.getElementById('copyText');
        
                if (textoCopiado === "") {
                    btn.style.visibility = "hidden";
                    }
                    else{
                        btn.style.visibility = "visible";
                            }           
            } 
                

