// comentário de uma linha

/*
comentário multiplas linhas
*/

/*
OPERADORES --
    Atribuição -- 
        =   atribuir valor...
        +=  EX. x += y -> x = x + y
        *=  EX. x *= y -> x = x * y
        /=  EX. x /= y -> x = x / y
        %=  EX. x %= y -> x = x % y

    Aritmeticos --
        +   Adição
        -   Subtracção
        *   Multiplicação
        **  Exponenciação
        /   Divisão
        %   Módulo
        ++  Incrementar
        --  Decrementar

    Comparação --
        ==      igual a
        ===     mesmo valor e mesmo tipo
        !=      diferença
        !===    tipos e valores diferentes
        >       maior que
        <       menor que
        >=      maior ou igual a
        <=      menor ou igual a
        
        Lógicos --
        &&  "e" lógico
        ||  "ou" lógico
        !   "não" lógico
*/

   // diferentemente das variaveis que são declaradas igual a maioria das linguagens, as
   // constantes são declaradas tudo em maiusculo e seus valores não podem ser alterados
   const PRECO = 2;
   var desconto = 0.2;
   var total = PRECO - 0.2;
   
   // funções -
   
   function soma(a,b){
       console.log(a+b); // print no console
       return a + b;
}

function returnEvenVales(array){
    let evenNum = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            evenNum.push(array[i])
        }
    }
    console.log('Os numeros pares são: ', evenNum)
}

let array = [1,2,3,4,5,6,7,8];
returnEvenVales(array);

