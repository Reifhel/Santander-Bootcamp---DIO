const map = new Map();
map.set('João', 'Admin');
map.set('Rafael', 'Admin');
map.set('Paola', 'User');
map.set('Nataly', 'User');
map.set('Luiggi', 'User');

function getAdmin(map){

    let adm = [];

    for([key, value] of map){

        if(value === 'Admin'){
            adm.push(key);
        }

    }

    return adm;
}

console.log(getAdmin(map));