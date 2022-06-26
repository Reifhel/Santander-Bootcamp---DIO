const meuArray = [30, 30, 40, 5, 223, 2049, 2049, 3034, 5];

function valoresUnicos(array){

    const set = new Set(array);

    return [...set];
}
console.log(meuArray);
console.log(valoresUnicos(meuArray));