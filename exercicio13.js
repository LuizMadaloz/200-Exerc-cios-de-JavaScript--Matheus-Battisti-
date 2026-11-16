function calcularImc(peso, altura){
    
const IMC1 = peso / (altura * altura);
const IMC = IMC1.toFixed(2);
if(IMC < 18.5){
    console.log(`Seu IMC é ${IMC} você está abaixo do peso`);
}else if(IMC >= 18.5 && IMC < 25){
    console.log(`Seu IMC é ${IMC} você está normal`);
}else if(IMC >= 25 && IMC < 30){
    console.log(`Seu IMC é ${IMC} você está com sobrepeso`);
}else {
    console.log( `Seu IMC é ${IMC} você está com obesidade`);};

};

calcularImc(90, 1.9)
calcularImc(95, 1.9)
calcularImc(120, 1.9)
calcularImc(70, 1.9)
calcularImc(80, 1.9)
calcularImc(65, 1.9)
