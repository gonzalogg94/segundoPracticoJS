/*
 Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let cadena = prompt("Introduce un Texto:");
    let numero = cadena.length;
    let j;
    let letra;
    let salida = "";
    for (j = 0; j < numero; j++) {
        letra = cadena.charAt(j);    
        salida = letra + salida;
    }
    document.write(salida);
