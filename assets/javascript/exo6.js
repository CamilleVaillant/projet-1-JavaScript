

function estPremier(nombre){
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++){
        if (nombre % i === 0){
            return false;
        }
    }
    return true;
}

let nombre = 29;
if (estPremier(nombre)){
    console.log(nombre + " est un nombre premier.");
} else {
    console.log(nombre + " n'est pas un nombre premier.")
}