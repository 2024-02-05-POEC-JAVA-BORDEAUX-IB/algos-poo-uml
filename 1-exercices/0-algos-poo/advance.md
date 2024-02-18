# Exercice en autonomie
---

## Modalités

- Utilisez le langage de programmation de votre choix.
- Idéalement si vous connaissez la Programmation Orientée Objet (POO), l'utilisez dans vos programmes.

## Bonus

- Pour les plus avancées, adoptez une ***approche TDD***. Je peux vous assister dans les installations et la mise en place uniquement avec les langages JavaScript et PHP. Pour les autres langages de programmation, la logique est similaire, cependant, ce n'est pas ma spécialité donc mon aide sera moins efficiente.

---

## Exercice 1

1. Déterminez à partir de l'âge si une personne est :
- Enfant (en dessous ou égale à 10 ans)
- Adolescent (entre 11 et 17 ans)
- Majeur (au-dessus de 18 ans)
- Senior (au-dessus de 50 ans)

---

## Exercice 2

1. Calculez la moyenne de plusieurs notes

### Spécifications techniques

- Une fonction qui prend en paramètre un tableau et renvoie la moyenne

---

## Exercice 3

1. Calculez le prix TTC d'un produit

### Spécifications techniques

- Prix hors taxes et taux de la tva en entrée (paramètres de votre fonction)
- La fonction retourne le prix TTC

---

## Exercice 4

Affichez en fonction d'une heure, le moment de la journée :
- Matin (entre 6 et 12)
- Après-midi (entre 12h et 18h)
- Soirée (entre 18h et 00h)
- Nuit (entre 00h et 6)

---

## Exercice 5

- Utilisez la boucle ***while***
- Retournez sous forme de tableau tous les codes postaux possibles à partir d'un département comme par exemple le 34.

---

## Exercice 6

Utilisez la boucle ***for***, affichez les tables de multiplication de *X* à *Y*.

### Spécifications

- *X* et *Y* sont des paramètres
- *X* et *Y* sont des multiplicandes
- *X* un nombre entier
- *Y* un nombre entier
- *Y* est supérieur à *X*
- *Z* un autre paramètre qui est le *multiplicateur*
- "Dans la multiplication « 5 × 9 = 45 », le nombre 5 est le multiplicande, le nombre 9 est le multiplicateur et le nombre 45 est le produit. On peut aussi dire que les nombres 5 et 9 sont des facteurs dans cette opération de multiplication."

---

## Exercice 7

Vérifiez qu'une adresse email est au bon format.

### Spécifications techniques

- S'appuyez sur les expressions régulières implémentées dans tous les langages de programmation
- [Apprendre les expressions régulières](https://regexlearn.com/fr)

---

## Exercice 8

Créez une fonction qui prend en entrée une ressource (fichier) et qui retourne son contenu.

---

## Exercice 9

Créez une fonction qui lit un csv et retourne le résultat sous forme de tableau (array)

---

## Exercice 10

Écrivez un *script* qui produit le résultat ci-dessous à partir d'un nombre qu'on prend en entré. Par exemple, ici 5 qui produit ce résultat ***122333444455555***

---

## Exercice 11

Une fonction :
- prend 2 paramètres en entrée
- en sortie, il permute les deux nombres.

### Spécification technique

- Votre fonction retourne sous forme de tableau les deux nombres dans l'ordre qu'ils ont été saisis

#### Exemple en JS

`myFn (nb1, nb2) {`

`// your code here`

`return [nb1, nb2];`

`}`

`myFn(2, 3) // [3,2]`

---

## Exercice 12

Créez une fonction qui permet de réaliser la suite de ***Fibonacci*** : *1, 2, 3, 5, 8, 13, 21, 34, 55, 89*, etc.

### Spécifications techniques

- Retournez les valeurs sous la forme d'un tableau numérique

---

## Exercice 13

A partir d'un tableau associatif, lorsqu'un utilisateur saisit la valeur de l'indice, vous devez récupérer la valeur associée à cette clé

### Exemple en PHP

`<?php
  $personnes = array('major' => true, 'age' => 36, 'name' => 'fatou');
  $vFatou = myFn("age"); // 36
  $vNull = myFn('address'); // null
  $numbers = [10,50,9,56,87];
  $vNum = myFn(50);//1`

---

## Exercice 14

En utilisant un tableau similaire à celui présenté ci-dessous, comptez le nombre d'éléments du tableau et donnez le nombre total des habitants.

`const countries = [67595000,9998000,8417000,1820631,434403,122273500, 82800000];`

---

## Exercice 15

1. Utilisez une fonction native de votre langage de programmation pour génèrer un nombre aléatoire
2. Remplissez un tableau avec 10 nombres aléatoires compris entre 0 et 100.
3. Testez si le chiffre donné en paramètre est présent dans le tableau en retournant ***true*** ou ***false***.

---

## Exercice 16

1. Utilisez la fonction native de votre langage de programmation pour génèrer un nombre aléatoire.
2. Remplissez un tableau avec 10 nombres aléatoires compris entre 0 et 100.
3. Répartissez ensuite les valeurs dans deux tableaux distincts.
- Le premier contiendra les valeurs inférieures à 50
- Le second contiendra les valeurs supérieures ou égales à 50.

---

## Exercice 17

Créez une fonction qui prend en paramètre un tableau de *string* et retourne le mot le plus petit.

---

## Exercice 18

Reprenez les exercices sur la recherche de la clé et de la valeur dans un tableau,
Lorsqu'une clé ou une valeur n'existe pas, déclenchez une exception

### Explications des exceptions

- Une exception est généralement associé à un cas d'erreur.
- Par exemple, le programme s'attend à traiter des nombres, l'utilisateur lui fournit des chaines de caractère.
- Une exception est généralement ***fatale***, c'est-à-dire, votre programme s'arrête et la suite des instructions dans votre code source après la ligne déclenchant l'excéption ne sont pas exécutées.
- Vous pouvez gérer les exceptions avec les blocs ***try/catch***
- Vous pouvez déclencher vos propres exceptions (dans le cas ou dans votre programme, vous avez prévu des cas d'erreurs) à l'aide généralement du mot-clé ***throw**
---

## Exercice 19

Une fonction qui divise 2 nombres,
Lorsque le deuxième nombre est égale à 0, déclenchez une exception.
