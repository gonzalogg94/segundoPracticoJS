/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


*/
let nombre1=pront("¿cual es el nombre de la persona?")
let edad1=parseInt(pront("¿Y cual es su edad?"))
let nombre2=pront("¿cual es el nombre de la segunda persona?")
let edad2=parseInt(prompt("¿y cual es su edad?"))
let nombre3=pront("¿cual es el nombre de la tercera persona?")
let edad3=parseInt(pront("¿y cual es su edad?"))
if(edad1>edad2&&edad1>edad3){
    document.write("El nombre del la persona con mayor edad es: "+(nombre1))
}else if(edad2>edad1&&edad2>edad3){
    document.write("El nombre del la persona con mayor edad es: "+(nombre2))
}else if(edad3>edad1&&edad3>edad2){
    document.write("El nombre del la persona con mayor edad es: "+(nombre3))
}