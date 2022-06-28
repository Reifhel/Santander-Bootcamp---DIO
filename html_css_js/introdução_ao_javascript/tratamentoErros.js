function validaArray(arr, num){


    try {

    if(!arr, !num) throw new ReferenceError('Parâmetros não enviados...');
    if(typeof(arr) !== 'object') throw new TypeError('Array não é tipo object');
    if(typeof(num) !== 'number') throw new TypeError('Num não é tipo number');
    if(arr.length !== num) throw new RangeError('Tamanho não correspondente');

    return arr;
        
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log('Reference error...');
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log('Type error...');
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log('Range error...');
            console.log(e.message);
        }
        else{
            console.log('Erro não esperado...');
            console.log(e.name);

        }
    }

}

console.log(validaArray([1],2))