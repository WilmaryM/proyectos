
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
    let btn = document.getElementById('copyText').style.display="show";
    document.getElementById('copyText').style.display="inherit";
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
    function copiar() {
        let copiedText = document.getElementById('ocultar').textContent;
        //let btn = document.getElementById('copyText');

        navigator.clipboard.writeText(copiedText);
        
       /* btn.addEventListener('change', function() {
        if (copiedText !== "") {
            btn.style.visibility = "visible";
        } else {
            btn.style.visibility = "hidden";
        }
        });*/
    }
    
                

