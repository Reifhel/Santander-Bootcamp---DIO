
function comparaNumeros(numero1, numero2){

    var soma = numero1 + numero2;

    var iguais = (numero1 == numero2) ? 'são iguais':'não são iguais';
    var maior_menor10 = (soma > 10) ? 'maior que 10':'menor que 10';
    var maior_menor20 = (soma < 20) ? 'menor que 20':'maior que 20';

    console.log(`Os numeros ${numero1} e ${numero2} ${iguais}. Sua soma é ${soma}, que é ${maior_menor10} e ${maior_menor20}`);
}

comparaNumeros(7,7);