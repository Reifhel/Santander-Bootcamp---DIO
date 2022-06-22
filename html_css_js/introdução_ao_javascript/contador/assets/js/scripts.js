var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function verificar(){

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'white';
    }

}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    verificar();
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    verificar();
}