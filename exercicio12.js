function statusMedia(media){
    if(media < 0 || media > 10){
        console.log("Média informada é inválidada");
    }else if(media >= 7){
        console.log("Aluno aprovado");
    }else if(media < 7 && media >= 5 ){
        console.log("Aluno em recuperação");

    }else{
        console.log("Aluno reprovado");
    };
};

statusMedia(11);
statusMedia(-1);
statusMedia(0);
statusMedia(7);
statusMedia(6.99);
statusMedia(5);
statusMedia(4.99);
statusMedia(4);
