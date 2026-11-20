function numeroMaior(n1,n2,n3){

    if(n1 > n2 && n1 > n3){
        console.log(`O número ${n1} é o maior`);
    }else if(n2 >n3 && n2 > n1){
        console.log(`O número ${n2} é o maior`);
    }else if(n3>n1 && n3 >n2){
        console.log(`O número ${n3} é o maior`);
    }else{
        if(n1 == n2 || n1 == n3 || n2 ==n3){
        if(n1 == n2 && n1 == n3){
            console.log(`Todos os números são iguais`);
        } else if(n1 !=n2 && n1 !=n3){
            console.log(`${n2} e ${n3} são iguais`)
        }else if(n1 ==n2){
            console.log(`${n2} e ${n1} são iguais`)
        }else{
            console.log(`${n1} e ${n3} são iguais`)
        }

    }
}};

numeroMaior(105,3,4);
numeroMaior(10,30,40);
numeroMaior(105,3,3);
numeroMaior(105,300,4);
numeroMaior(105,105,4);
numeroMaior(105,300,300);
numeroMaior(300,300,300);
