/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
   
document.write("<hr>");
//DECLARAMOS LAS VARIABLES
let i=1
let j = 500;
let rep = 0;
//BUCLE DESDE 1 HASTA j
for (i = 1; i <= j; i++) {
    //IMPRIMIMOS EL NÚMERO i
    document.write(i);
    //SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    //SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
    //SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}