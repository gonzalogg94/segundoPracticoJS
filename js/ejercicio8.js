/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = prompt("Introduce numero de repeticiones");
if (Number(numero) == numero) {
    if (numero > 0 && numero <= 50) {
        let repeticiones,i;
        for (i = 0; i <=numero; i++) {
            for (repeticiones = 1; repeticiones <= i; repeticiones++) {
                document.write(repeticiones);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número")
}