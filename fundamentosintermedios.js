//Parte 1:
//1. Sigma

function sigma(num){
    var sum = 0;
    for(i=0;i<num;i++){
        sum = sum + (i+1); 
    }
    return sum
}

//2. Factorial

function factorial(num){
    var mul=1;
    for(i=0;i<num;i++){
        mul=mul * (i+1);
    }
    return mul
}
//3. Fibonacci
function fibonacci(indice){
    var fib0 = 0;
    var fib1 = 1;
    var fib = [fib0, fib1];
    for(i=1;i<indice;i++){ 
        fib[i+1] = fib[i-1] + fib[i] // este debe ser el anterior
    }
    return fib[indice];
}
//4. Array: Penúltimo
function arrayPenul(array){
    var penul;
    
    if(array.length<=1){
        penul = "null";
            
    }
    else {
        penul = array[array.length-2];

    }
    return penul    
}
//5. Array: "N" último
function nUltimo(array,n){
    var nUlt;
    if(array.length<=n){
        nUlt = "null";
    }
    else{
        nUlt = array[array.length-(n+1)]
    }
    return nUlt
}
//6. Array: Segundo más grande
function segGrande(array){
    var mayor;
    var arrMayorMenor = [];
    var indice;
    var menor;

    if(array.length<2){
        bigSecond = "null";

    }
    else{
        array.forEach(i => {
            array.forEach((j, indexJ)=> {
                array.forEach((k, indexK) => {
                    if(k>j){
                        mayor = k;
                        indice = indexK;
                    } 
                    
                    else{
                        
                        menor = k;
                    }
                    
                });
                
            });
            arrMayorMenor.push(mayor);
            console.log(arrMayorMenor)
            array.splice(indice,1)
        });
        arrMayorMenor.push(menor)
        bigSecond = arrMayorMenor[1];
        console.log(arrMayorMenor)

    }
    return bigSecond
}
console.log(segGrande([42,1,4,3.14,7]))
