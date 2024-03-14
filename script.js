const digiteaqui = document.querySelector("#digiteaqui");
const criptografado = document.querySelector("#textocriptografado");
const btnCopiar = document.querySelector("#btncopiar");

window.addEventListener("load", function () {
  btnCopiar.style.display = "none";
});

function btnEncriptar() {
  escondeImagem();
  const textoEncriptado = encriptar(digiteaqui.value);
  console.log(textoEncriptado);
  criptografado.value = textoEncriptado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  console.log(criptografado.value);
  document.getElementById("naoencontrado").style.display = "none";
  document.getElementById("digitetexto").style.display = "none";
  document.getElementById("textocriptografado").style.display = "block";
  mostrarCopiar();
}

function escondeImagem() {
  document.getElementById("boneco").style.display = "none";
}

function mostrarCopiar() {
  btnCopiar.style.display = "block";
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  escondeImagem();
  console.log(criptografado.value);
  const textoDesencriptado = descriptar(textocriptografado.value);
  console.log(textoDesencriptado);
  criptografado.value = textoDesencriptado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  document.getElementById("naoencontrado").style.display = "none";
  document.getElementById("digitetexto").style.display = "none";
  document.getElementById("textocriptografado").style.display = "block";
  mostrarCopiar();
}

function descriptar(stringDescriptada) {
  stringDescriptada = stringDescriptada.toLowerCase();
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptada.includes(matrizCodigo[i][0])) {
      stringDescriptada = stringDescriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDescriptada;
}

function copiarTexto() {
  const texto = document.getElementById("textocriptografado");
  texto.select();
  navigator.clipboard.writeText(texto.value);
  alert("O texto: " + texto.value + " foi copiado!");
}
