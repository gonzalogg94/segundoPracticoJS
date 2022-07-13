/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/
var texto = prompt("Introduce un texto:");
    var numero = texto.length;    
    texto = texto.toUpperCase();  
    var letra;
    var contador = 0;
    var i;
    for (i = 0; i < numero; i++) {
        letra = texto.charAt(i);    
        if ((letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");
