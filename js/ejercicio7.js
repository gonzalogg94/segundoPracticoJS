/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero
let repeticion 
        for(numero=30;numero>=1;numero--){
            for(repeticion=numero;repeticion>=1;repeticion--){
                document.write(numero);
            }
            document.write("<br>")
        }
