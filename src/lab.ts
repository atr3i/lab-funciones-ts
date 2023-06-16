import "./style.css";

function cambiarFotoPrincipal(idMiniatura : string) : void {
    // Solución 1 Casting 
    // const fotoPrincipal = (document.getElementById("foto-principal") as HTMLImageElement);
    // const miniatura = (document.getElementById(idMiniatura) as HTMLImageElement);

    // if (fotoPrincipal !== null && fotoPrincipal !== undefined
    //     && miniatura !== null && miniatura !== undefined
    // ) {
    //     fotoPrincipal.src = miniatura.src;
    //     fotoPrincipal.alt = miniatura.alt;
    // }

    // Solución 2
    const fotoPrincipal = document.getElementById("foto-principal");
    const miniatura = document.getElementById(idMiniatura);

    if (fotoPrincipal !== null && fotoPrincipal !== undefined
        && miniatura !== null && miniatura !== undefined
    ) {
        if(fotoPrincipal instanceof HTMLImageElement && miniatura instanceof HTMLImageElement) {
            fotoPrincipal.src = miniatura.src;
            fotoPrincipal.alt = miniatura.alt;
        }
    }

}

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");
const miniatura4 = document.getElementById("miniatura4");

if (miniatura1 !== null && miniatura1 !== undefined) {
    miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
}
if (miniatura2 !== null && miniatura2 !== undefined) {
    miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));
}
if (miniatura3 !== null && miniatura3 !== undefined) {
    miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));
}
if (miniatura4 !== null && miniatura4 !== undefined) {
    miniatura4.addEventListener("click", () => cambiarFotoPrincipal("miniatura4"));
}



// function sumar() {
//     const sumando1 = (document.getElementById("sumando1") as HTMLInputElement).value;
//     const sumando2 = (document.getElementById("sumando2") as HTMLInputElement).value;

//     const resultado = parseInt(sumando1) + parseInt(sumando2);

//     const resultadoElement = document.getElementById("resultado");

//     if (resultadoElement !== null && resultadoElement !== undefined) {
//         resultadoElement.innerHTML = resultado.toString();
//     }
// }
// const botonSumar = document.getElementById("sumar");
// if (botonSumar !== null && botonSumar !== undefined) {
//     botonSumar.addEventListener("click", sumar);
// }
// function saludar() {
//     const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
//     const apellidos = (document.getElementById("apellidos") as HTMLInputElement).value;

//     const saludo = `Buenos días ${nombre} ${apellidos}`;
    
//     document.getElementById("saludo").innerHTML = saludo;

// }

// const buttonSaludar = document.getElementById("saludar");
// buttonSaludar.addEventListener("click", saludar);


// const aguacate = "🥑 Aguacate",
//     maiz = "🌽 Maíz",
//     cebolla = "🧅 Cebolla",
//     tomate = "🍅 Tomate",
//     arandanos = "🫐 Arandanos",
//     mango = "🥭 Mango",
//     lechuga = "🥬 Lechuga",
//     zanahoria = "🥕 Zanahoria",
//     setas = "🍄 Setas",
//     piña = "🍍 Piña",
//     huevo = "🥚 Huevo",
//     bacon = "🥓 Bacon",
//     queso = "🧀 Queso",
//     alubias = "🫘 Alubias",
//     pepino = "🥒 Pepino",
//     aceitunas = "🫒 Aceitunas",
//     pollo = "🍗 Pollo",
//     nueces = "🌰 Nueces";




// function pintaReceta(titulo : string, ingredientes : string, preparacion : string): void {

//     const estiloTitulo = "color: crimson; font-size: 18px; font-style: italic";

//     console.log(`%c${titulo}`, estiloTitulo);

//     console.log(`Ingredientes: ${ingredientes}`);

//     console.log(`Preparación: ${preparacion}`);
// }

// pintaReceta(
//     "Ensalada de alubias con aguacate y huevo",
//     `${alubias}, ${aguacate}, ${huevo}, ${cebolla}, ${tomate}, ${lechuga}.`,
//     "cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre."
// );
// pintaReceta(
//     "Ensalada de setas y bacon",
//     `${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}.`,
//     "saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre."
// );
// pintaReceta(
//     "Ensalada de arandanos y pollo",
//     `${arandanos}, ${pollo} cocido, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}.`,
//     "mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza."
// );
// pintaReceta(
//     "Ensalada de maíz y piña",
//     `${maiz}, ${piña} en cubos, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}.`,
//     "mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre."
// );

// pintaReceta(
//     "Ensalada de mango y queso feta",
//     `${mango} en cubos, ${queso} feta, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}.`,
//     "mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva."
// );



// const areDelCirculo = (radio : number): number => 2 * Math.PI * radio * radio;


// const area : number = areDelCirculo(2);
// console.log(area);

// const areaDelCuadrado = (lado : number): number => lado * lado;

// console.log(areaDelCuadrado(10));