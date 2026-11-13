function calcularMédia(nota1,nota2){
    if(nota1 >=0 && nota2 >=0 && nota1 < 11 && nota2 <11 ){
        let total = nota1 + nota2;
        let media = total/2;
        console.log(`A média do aluno é: ${media}`);
        if(media >= 7){
            console.log("Parabéns vc foi aprovado")
        }else{
            console.log("Está reprovado")
        }
    }else{
        console.log("os valores devem ficar entre 0 a 10")
        };
};

calcularMédia(10,8);
calcularMédia(8,10);
calcularMédia(0,8);
calcularMédia(7.2,9.3);
calcularMédia(11,8);
calcularMédia(-1,8);