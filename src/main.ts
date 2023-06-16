import "./style.css";
const anterior = (document.getElementById("anterior") as HTMLButtonElement);
const siguiente = (document.getElementById("siguiente") as HTMLButtonElement);
const reset = document.getElementById("reset");
const enviar = document.getElementById("enviar");

let numero = 0;

function cambiarTurno(valueButton: string): void {
    let displayTurno = document.getElementById("numero-turno");
    let inputTurno = document.getElementById("turno-input");
    let inputValue = (inputTurno as HTMLInputElement).value;
    
    const error = (document.getElementById("error") as HTMLElement);

    if (numero !== undefined && numero !== null) {
        if (valueButton == "siguiente") {
            if(numero >= 99) {
                error.textContent = "* No se admiten números de más de dos dígitos.";
            } else {
                numero++;
            }
        }
        if (valueButton == "anterior") {
            if (numero > 0) {
                numero--;
            }
        }
        if (valueButton == "reset") {
            numero = 0;
        }
        if (valueButton == "enviar") {
            if(inputValue.length == 2) {
                numero = parseInt(inputValue);
                error.textContent = "";
            } else {
                error.textContent = "* Por favor, introduce un número de dos dígitos.";
            }
        }
        let turno = numero.toString().padStart(2, "0");
        (displayTurno as HTMLElement).innerHTML = turno;
    }
}

if (anterior !== null && anterior !== undefined) {
    anterior.addEventListener("click", () => cambiarTurno("anterior"));
}
if (siguiente !== null && siguiente !== undefined) {
    siguiente.addEventListener("click", () => cambiarTurno("siguiente"));
}
if (reset !== null && reset !== undefined) {
    reset.addEventListener("click", () => cambiarTurno("reset"));
}
if (enviar !== null && enviar !== undefined) {
    enviar.addEventListener("click", () => cambiarTurno("enviar"));
}