/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

let numero
let repeticion 
        for(numero=1;numero<=30;numero++){
            for(repeticion=0;repeticion<numero;repeticion++){
                document.write(numero);
            }
            document.write("<br>")
        }