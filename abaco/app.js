let abaco = 
[
"000---000000",
"000---000000",
"0000---00000",
"00000---0000",
"00---0000000",
"00000---0000",
"00---00000000"
]; //3345252

let potencias = [1000000,100000,10000,1000,100,10,1]
let total = 0;
console.log(abaco);

for(index in abaco){
    let numberRaw = abaco[index].split('---')[0].length;
    total += numberRaw*potencias[index]
   
}
console.log("Numero representado en el ábaco: "+total);