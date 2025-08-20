// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // .trim() elimina espacios en blanco

    // 2. Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // cortamos la función si está vacío
    }

    // 3. Agregar al array
    listaDeAmigos.push(nombre);

    // 4. Limpiar el campo de entrada
    input.value = "";
    actualizarLista();
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiamos antes de volver a mostrar

    listaDeAmigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener nombre sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar resultado en el elemento con id "resultado"
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

