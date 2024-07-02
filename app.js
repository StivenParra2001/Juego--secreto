let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
document.getElementById ("reiniciar").removeAttribute("disabled", "true");
console.log(intentos);
if (numeroDeUsuario === numeroSecreto) {
 asignarTextoElemento ("p" ,`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
   } else {
    //el usuario no acerto.
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ("p" ,"el numero es menor");
        
    } else {  
        asignarTextoElemento ("p" ,"el numero es mayor");
    }

    intentos++;
    limpiarCaja();
   }  
   
   return;
 }
   

function condicionesInicilaes () {
    asignarTextoElemento ("h1" , "Juego del numero secreto");
    asignarTextoElemento("p" , `Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}


 function reiniciarjuego (){
      // limpiar la caja 
      limpiarCaja();
      // indicar mensaje de intervalo de numeros
      condicionesInicilaes ();
      // generar el numero aliatorio 
      //inicializar el numero de intentos 
      //desabhilitar el boton del juego
      document.querySelector("#reiniciar").setAttribute("disabled", "true");
 
}



 function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
  
 }


function generarNumeroSecreto () {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;


    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", `ya se sortearon todos los numeros posibles`);
        
    } else {
    //el numero generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto ();
    } else {
        
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
        }
}
}
 condicionesInicilaes ();