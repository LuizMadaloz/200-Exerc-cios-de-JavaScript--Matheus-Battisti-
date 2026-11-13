function devoVotar(idade){
    if(idade < 16){
        console.log("Você ainda não pode votar");
    }else if (idade < 18 || idade >=70){
        console.log("Pode votar, mas mão tem obrigatoriedade");
    }else{
        console.log("Você é obrigado a votar");
    }
};

devoVotar(10);
devoVotar(100);
devoVotar(17);
devoVotar(18);
devoVotar(70);
devoVotar(16);
devoVotar(15);