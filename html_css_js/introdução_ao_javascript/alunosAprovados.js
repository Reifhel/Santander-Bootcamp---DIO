const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sophia',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Paulo',
        nota: 7,
        turma: '2C',
    },
    {
        nome: 'Rosana',
        nota: 6,
        turma: '1A',
    },
    {
        nome: 'Maria',
        nota: 3,
        turma: '1B',
    },
];

function alunosAprovados(array, media){
    
    let aprovados = [];
    
    for(let i = 0; i<array.length; i++){
    
        const {nota,nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    
    }
    
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));