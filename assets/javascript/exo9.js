function sommeDesChiffres(nombre) {
    let nombreStr = nombre.toString();
    let somme = 0;

    for (let i = 0; i < nombreStr.length; i++) {
        somme += parseInt(nombreStr[i]);
    }
    return somme;
}


let nombre = 12345;
console.log("La somme des chiffres de " + nombre + " est: " + sommeDesChiffres(nombre));