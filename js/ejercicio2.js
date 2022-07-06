
/*
 Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

let calificacion=parseInt(prompt("Ingrese la calificacion"))
if(calificacion<=2){
    alert("Muy Deficiente")
}else if(calificacion>=3&&calificacion<=4){
    alert("Insuficiente")
}else if(calificacion>=5&&calificacion<=6){
    alert("Suficiente")
}else if(calificacion===7){
    alert("Bien")
}else if(calificacion>=8&&calificacion<=9){
    alert("Notable")
}else if(calificacion===10){
    alert("Sobresaliente")
}else{
    alert("Numero erroneo")
}




