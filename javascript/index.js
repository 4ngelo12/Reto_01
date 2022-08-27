var botonEncriptar = document.querySelector(".button-encriptar"), botonDesencriptar = document.querySelector(".button-desencriptar"),
    botonCopiar = document.querySelector(".Copiar"), textoEncriptar = document.querySelector("#texto-encriptar"),
    textoEncriptado = document.querySelector("#texto-encriptado"), desencrip, validacion = true,
    validar = document.querySelector("#texto-encriptar");

function inicio() {
    document.querySelector(".rectangulo-vacio").style.display = "block";
    document.querySelector(".rectangulo-texto").style.display = "none";
    
}

function validarDatos() {
    var evento = window.event;
    if (evento.charCode >= " ".charCodeAt() && evento.charCode <= "}".charCodeAt()) {
        return validacion = true;
    }
    else {
        document.querySelector("#texto-encriptar").style.color = "red";
        alert("¡Error!, por favor lee la advertencia")
        return validacion = false;
    }
}

function encriptar() {
    var texto = textoEncriptar.value, encriptar = "", encriptado = "", caracteres = [], encrip = "";
    if (validacion) {
        for (var x of texto) {
            encriptar += x;
            encriptado = encriptar.toLowerCase()
            caracteres = encriptado.split("");
        }
        for (var i = 0; i <= caracteres.length; i++) {
            if (caracteres[i] == "a") {
                caracteres[i] = "ai";
            } else if (caracteres[i] == "e") {
                caracteres[i] = "enter";
            } else if (caracteres[i] == "i") {
                caracteres[i] = "imes";
            } else if (caracteres[i] == "o") {
                caracteres[i] = "ober";
            } else if (caracteres[i] == "u") {
                caracteres[i] = "ufat";
            }
            encrip = caracteres.join("");
        }
        document.querySelector(".rectangulo-vacio").style.display = "none";
        document.querySelector(".rectangulo-texto").style.display = "block";
        document.querySelector(".rectangulo").style.height = "65rem";
        textoEncriptado.value = encrip;
        textoEncriptar.value = "";
    }
}

function Desencriptar() {
    var nuevoTexto = textoEncriptar.value, textoDesencriptar = [], text = "";
    if (validacion) {
        for (var x of nuevoTexto) {
            text += x;
            if (text.includes("ai")) {
                text = text.replace("ai", "a");
            } else if (text.includes("enter")) {
                text = text.replace("enter", "e");
            } else if (text.includes("imes")) {
                text = text.replace("imes", "i");
            } else if (text.includes("ober")) {
                text = text.replace("ober", "o");
            } else if (text.includes("ufat")) {
                text = text.replace("ufat", "u");
            }
        }
        document.querySelector(".rectangulo-vacio").style.display = "none";
        document.querySelector(".rectangulo-texto").style.display = "block";
        document.querySelector(".rectangulo").style.height = "65rem";
        textoEncriptado.value = text;
        textoEncriptar.value = "";
    }
}

function copiar() {
    var copiar = textoEncriptado;
    copiar.select();
    document.execCommand("copy");
    textoEncriptado.value = "";
}

inicio();
botonEncriptar.onclick = encriptar;
botonCopiar.onclick = copiar;
botonDesencriptar.onclick = Desencriptar;
validar.onkeypress = validarDatos;