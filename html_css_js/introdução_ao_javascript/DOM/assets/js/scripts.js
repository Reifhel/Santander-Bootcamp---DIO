const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode);

function changeMode(){
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');

    if(h1.classList.contains('dark-mode')){
        h1.textContent = 'Dark Mode ON';
    }
    else{
        h1.textContent = 'Light Mode ON';
    }

    if(button.classList.contains('dark-mode')){
        button.textContent = 'Light Mode';
    }
    else{
        button.textContent = 'Dark Mode';
    }

}