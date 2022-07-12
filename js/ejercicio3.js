/*
 Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.
 Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

 let texto = "";
do {
    let oracion = prompt("Introduce una oracion");
    if (texto == "") {
        texto = texto + oracion;
    }
    else {
        texto = texto + "-" + oracion;
    }
} while (confirm("Desea seguir?"));
document.write(texto);
