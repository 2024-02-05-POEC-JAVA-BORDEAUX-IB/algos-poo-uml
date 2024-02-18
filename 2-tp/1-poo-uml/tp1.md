# TP : caisse enregistreuse

---

Source : Livre UML 2 par la pratique 5ème édition Pascal Roques édition eyrolles.

---

## Modalités

- Modélisez les besoins à l'aide des diagrammes UML

---

## Expression des besoins

Le déroulement normal d'utilisation de la caisse est le suivant :
- Un client arrive à la caisse avec des articles à payer ;
- Le caissier enregistre le numéro d'identification (CPU) de chaque article, ainsi que la quantité si elle est supérieure à un ;
- La caisse affiche le prix de chaque article et libellé ;
- Lorsque tous les achats sont enregistrés, le caissier signale la fin de la vente ;
- La caisse affiche le total des achats ;
- Le client choisit son mode de paiement :
  - Numéraire : le caissier encaisse l'argent reçu, la caisse indique la monnaie à rendre au client ;
  - Chèque : le caissirer vérifie la solvabilité du client en transmettant une requête à un centre d'autorisation via la caisse ;
  - Carte de crédit : un terminal bancaire fait partie de la caisse. Il transmet une demande d'autorisation à un centre d'autorisation en fonction du type de la carte ;
- La caisse enregistre la vente et imprime un ticket ;
- Le caissier donne le ticket de caisse au client.

Après la saisie des articles, le client peut présenter au caissier des coupons de réduction pour certains articles. Lorsque le paiement est terminé, la caisse transmet les informations sur le nombre d'articles vendus au système de gestion de stocks.
Tous les matins, le responsable du magasin initialise les caisses pour la journée.

---

## Travail à réaliser en équipe

1. Réalisez un diagramme de cas d'utilisation.
2. Parmi vos cas d'utilisation, choisissez 3 à 4 (selon le nombre de personnes dans le groupe) à détaillé en utilisant dans un texte. Vous pouvez réutiliser le [modèle suivant](../../1-exercices/1-uml/ressources/uc_details.xlsx).