const pessoa1 = {
    
    nome: 'Enzo',
    idade: 7,
    
};
const pessoa2 = {
    
    nome: 'Sabrina',
    idade: 18,
    
};
const pessoa3 = {
    
    nome: 'Rafael',
    idade: 19,
    
};
const animal = {
    
    nome: 'lobin',
    idade: 5,
    raça: 'pug',
    
}; 

function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`
}

console.log(calculaIdade.call(animal, 5));
console.log(calculaIdade.apply(animal, [5]));