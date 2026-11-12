let verdadeira = true;
let falsa = false;

if (!falsa && verdadeira || falsa){
    console.log("Tudo certo chefe");
};

console.log("NOT", !verdadeira , !falsa );
console.log("AND", verdadeira && falsa);
console.log("OR", verdadeira || falsa);