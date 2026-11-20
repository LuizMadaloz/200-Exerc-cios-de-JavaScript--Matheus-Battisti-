function verificarPalimendro(palavra){
    
    let invertida = palavra.split("").reverse().join("");

    if(palavra == invertida){
        console.log(`A palavra ${palavra} é um palimendro`);
    }else{
        console.log(`A palavra ${palavra} não é um palimendro`);
    }
};

verificarPalimendro("ala");
verificarPalimendro("alho");
verificarPalimendro("Jabuticaba");