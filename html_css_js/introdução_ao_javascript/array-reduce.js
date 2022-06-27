const array = [1,2,3,4,5,6,7,8,9,10];

function somaArray(array){
   return array.reduce((prev,current) => prev + current);
}

console.log(somaArray(array));

const lista = [
    {
        nome: 'Sabão em pó',
        preco: 25,
    },
    {
        nome: 'Cereal',
        preco: 7,
    },
    {
        nome: 'Carne',
        preco: 50,
    },
    {
        nome: 'Coca-Cola',
        preco: 5,
    }
];

function saldoRestante(array, saldo){
    return array.reduce((prev,current) => prev - current.preco, saldo)
}

console.log(saldoRestante(lista, 100));

