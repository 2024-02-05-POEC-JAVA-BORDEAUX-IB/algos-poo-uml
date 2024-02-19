// AIDE JS
// Ceci est un commentaire sur une ligne
// Commentaire = instruction non évalué ou exécuté dans le programme
/**
 * Commentaire
 * sur plusieurs
 * lignes
 */

// Affichage dans la console
console.log('hello world')

// Variables
// Mot-clé let pour déclarer une variable
let firstName = 'Glodie'
// Mot-clé const pour déclarer une constante
const BIRTHDAY = '07/12/1991'

// Conditions if/elseif/else
if(firstName === 'Glodie') {
    console.log('Glodie')
} else if(firstName === 'Toto') {
    console.log('toto')
} else { // cas par défaut lorsqu'aucune des questions précédentes sont évaluées à true
    console.log('autre')
}

// Conditions switch : plus adapté pour les égalités sur les string ou pour améliorer la performance de l'évaluation des conditions
switch(firstName) {
    case 'Glodie':
        console.log('Glodie')
    break
    case 'Toto':
        console.log('Toto')
    break
    default: // équivaut au else
        console.log('default')
    break
}

// Boucle for
/**
 * 1. compteur i
 * 2. condition de sortie (lorsqu'elle est évaluée à false => sortie de la boucle)
 * 3. Opérateur d'incrémentation ou de décrementation ++ ou --
 * A utiliser lorsqu'on connaît le nombre d'itération
 */
for(let i = 0; i < 10; i++) {
    console.log('i', i)
    // concaténation
    console.log('Le compteur i vaut ' + i)
}

// Boucle While
/**
 * A utiliser lorsqu'on ignore le nombre d'itération
 */
let age = 30
while(age < 50) {
    console.log('age', age)
    age++ // attention sans incrémentation et donc solution de sortie ici, c'est une boucle infinie
}