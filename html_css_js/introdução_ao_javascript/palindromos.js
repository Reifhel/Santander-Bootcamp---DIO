
// solução 1
function verificaPalindromos(termo){

    if(!(typeof termo == "string")) return;

    let palindromo = termo.split("").reverse().join("");
    return (termo === palindromo);
    

}

// solução 2
function verificaPalindromos2(termo){

    if(!(typeof termo == "string")) return;

        for(let i = 0; i < termo.length/2; i++){

            if(termo[i] !== termo[termo.length - 1 - i]){
                return false;
            }

        }

    return true;

}

console.log(verificaPalindromos2("tenet"));