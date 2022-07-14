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

//PEDIMOS EL NÚMERO POR TECLADO
var numrep = prompt("Introduce numero de repeticiones");
//SI LO INTRODUCIDO ES UN NÚMERO
if (Number(numrep) == numrep) {
    //SI ES UN NÚMERO ENTRE 1 Y 50
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        //BUCLE QUE VA DESDE 0 HASTA numrep
        for (i = 0; i <=numrep; i++) {
            //BUCLE DESDE 1 HASTA i
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número);
}