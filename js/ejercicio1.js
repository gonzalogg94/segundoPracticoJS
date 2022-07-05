/*
 Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad=parseInt(prompt("ingrese su edad"))
if(edad>=18){
document.write("Usted tiene "+(edad)+" años la cual es edad necesaria para poder conducir")
}else{
    document.write("Usted tiene "+(edad)+" años la cual no es una edad validad para poder conducir")
}