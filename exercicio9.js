function numPositivoNegativo(num){
if(num > 0){
    console.log("número positivo")
}else if(num < 0){
    console.log("número negativo")
}else{
    console.log("Zero é considerado neutro")
}
}

numPositivoNegativo(10);
numPositivoNegativo(-10);
numPositivoNegativo(0);
numPositivoNegativo(-0.5);
numPositivoNegativo(0.5);