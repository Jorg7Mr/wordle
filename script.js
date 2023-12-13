let intentos = 6;
let diccionario = ['CUCARACHA', 'DORMIR', 'BAILAR', 'DESAYUNAR']

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener('load', init)

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function actualizarVidas() {
    const spanVidas = document.getElementById("intentos");
    spanVidas.innerHTML = ''; 

    for (let i = 0; i < intentos; i++) {
        const corazonImg = document.createElement('img');
        corazonImg.src = './img/corazon.png'; 
        corazonImg.classList.add('corazon');
        spanVidas.appendChild(corazonImg); 
    }
}
function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    console.log(intento, " sada ", palabra);
    return intento;

}

function intentar() {
    const gameOverDiv = document.getElementById("game-over");
    const winDiv = document.getElementById("win-game");
    const palabraP = document.getElementById("palabra");
    const palabraP2 = document.getElementById("palabra2");

    var INTENTO = leerIntento();
    let nuevoIntento = "";

    if (INTENTO === palabra) {
        terminar();
        winDiv.style.display = "block";
        palabraP2.textContent = palabra;
        return
    }

    for (let i = 0; i < palabra.length; i++) {
        if (INTENTO[i] === undefined) {
            nuevoIntento += " "; 
        } else {
            nuevoIntento += INTENTO[i];
        }
    }

    INTENTO = nuevoIntento;
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--
    actualizarVidas();
    if (intentos == 0) {
        terminar();
        gameOverDiv.style.display = "block";
        palabraP.textContent = palabra;
    }
}

function terminar() {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
}

actualizarVidas();