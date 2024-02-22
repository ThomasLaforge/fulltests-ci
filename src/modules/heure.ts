// - le cadran de la lune :
//     - 1 : réduit le total de 2
//     - 2 : divise le total par 2
// - le cadran de la terre :
//     - 1 : ajoute 2 au total
//     - 2 : le resultat total est 6
// - le cadran du soleil :
//     - 1 : n'utilise pas le cadran de la terre (ni valeur, ni pouvoir)
//     - 2 : double la valeur du cadran de la terre (pas le pouvoir)

export function getValue(lune: number, terre: number, soleil: number): number {    
    // gérer la valeur de terre en fonction du soleil
    if(soleil === 1) {
        terre = 0;
    }

    // additionner les valeurs
    let heure = lune + terre + soleil;
    
    if(lune === 1){
        heure -= 2
    }

    if(soleil === 2) {
        heure += terre

        if(terre === 1) {
            heure += 2;
        }
        
        if(terre == 2) {
            heure = 6;
        }
    }
    
    if(!(soleil === 2 && terre === 2) && lune === 2){
        heure /= 2;
    }

    return heure;
}

// Si le résultat est <= 1 alors l'heure est mortin
// sinon si le résultat est <= 2, alors l'heure est aprenoon
// sinon si le résultat est <= 4 alors l'heure est soirning
// sinon l'heure est nuight.

export function getHourFromValue(value: number): string {
    if(value <= 1) {
        return "mortin";
    }
    else if(value <= 2) {
        return "aprenoon";
    }
    else if(value <= 4) {
        return "soirning";
    }
    else {
        return "nuight";
    }
}

// export function getHour(lune: number, terre: number, soleil: number): string {    
//     return getHourFromValue(getValue(lune, terre, soleil));
// }

export function getHour(lune: number, terre: number, soleil: number): string {
    if(lune === 1 && soleil === 1){
        return "mortin";
    }
    if(lune === 2 && soleil === 1){
        return "aprenoon";
    }
    if(lune === 2 && terre === 1 && soleil === 2){
        return "soirning";
    }
    return "nuight";
}

// Afficher toutes les possibilités

// for(let lune = 1; lune <= 2; lune++) {
//     for(let terre = 1; terre <= 2; terre++) {
//         for(let soleil = 1; soleil <= 2; soleil++) {
//             console.log(`lune: ${lune}, terre: ${terre}, soleil: ${soleil} => ${getValue(lune, terre, soleil)}`);
//         }
//     }
// }