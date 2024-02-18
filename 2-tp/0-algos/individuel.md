# TP individuel

---

## Modalités

**Pour chaque problème, ci-dessous, vous devez créer des fonctions**.

---

1. Ecrivez un programme qui compte le nombre totale des consonnes dans une phrase.

Exemple

*En entrée : `'ceci est une phrase'`*
*En sortie : `9`*

---

2. Ecrivez un programme qui vérifie qu'un mot est un [palindrome](https://www.larousse.fr/dictionnaires/francais/palindrome/57418). **Pour simplifier l'exercice, on se focalise uniquement sur un mot et pas une phrase.**

Exemples

*En entrée : `rats`*
*En sortie : `false`*

*En entrée : `elle`*
*En sortie : `true`*

*En entrée : `Laval`*
*En sortie : `true`*

*En entrée : `gag`*
*En sortie : `true`*


---

3. Ecrivez un programme qui retourne le nombre le plus élevé dans un tableau contenant N nombres entiers.

Exemple

*En entrée : `[10, 25, 6, 8, 9, 101 ,4]`*
*En sortie : `101`*

---

4. Ecrivez un programme qui retourne le nombre le moins élevé dans un tableau contenant N nombre entiers.

Exemple

*En entrée : `[10, 25, 6, 8, 9, 101 ,4]`*
*En sortie : `4`*

---

5. Ecrivez un programme qui retourne le mot le plus long d'une phrase.

Exemple

*En entrée : `Ceci est une belle phrase`*
*En sortie : `phrase`*

Aide : pour séparer une phrase plusieurs mots, vous pouvez utiliser la fonction split(' ').
Cf. [documentation de la fonction split](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split)

Exemple bout de code :

`let str = "hello world"`
`let words = str.split(' ') // découpage en mot à partir des espaces. words un tableau contenant les mots`

---

6. Ecrivez un programme qui retourne la taille du mot le plus long d'une phrase.

Exemple

*En entrée : `elle est plus longue cette phrase`*
*En sortie : `6`*

---

7. Ecrivez un algorithme qui retourne dans un tableau, le maximum de chaque sous-tableau

Exemple 

*En entrée : [ [10,7,6,8], [15,-1,56,7], [75,4,-5,-100] ]*

*En sortie : [10,56,75]*