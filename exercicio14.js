function calcAnobissexto (ano){
    let div4 = ano % 4;
    let div100 = ano % 100;
    let div400= ano % 400;
    if((div4 == 0 && div100 != 0) || div400 == 0){
        console.log("O ano " + ano + " é bissexto")
    }else{
        console.log("O ano " + ano + " não é bissexto")
    }
};

calcAnobissexto(4);
calcAnobissexto(4000);
calcAnobissexto(1432);
calcAnobissexto(2002);
calcAnobissexto(2004);
calcAnobissexto(2000);
calcAnobissexto(2001);