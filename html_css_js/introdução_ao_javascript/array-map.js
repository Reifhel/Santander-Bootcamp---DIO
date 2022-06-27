const maça = {
    value: 2,
};
const laranja = {
    value: 3,
};

array = [1,2,3,4,5,6,7,8,9,10];

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

// console.log('This -> maça: ', mapComThis(array, maça));
// console.log('This -> laranja: ', mapComThis(array, laranja));

function mapSemThis(array){
    return array.map((item) => item * 2);
}

console.log(mapSemThis(array));