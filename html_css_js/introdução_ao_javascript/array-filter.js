array = [1,2,3,4,5,6,7,8,9,10];

function filtroPar(array){
    return array.filter((item) => item % 2 == 0);
}

console.log(filtroPar(array));