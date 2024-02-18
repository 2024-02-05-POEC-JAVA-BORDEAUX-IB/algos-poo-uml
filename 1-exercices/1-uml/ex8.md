# Exercice 8

---

## Enoncé

Vous avez choisi pour ***GT chez toi***, de développez une application ***FULL-JS***, avec le langage JavaScript en Front-end et Node JS en back-end.
Chaque application est déployé sur un serveur différent (le ***front-end*** est sur un serveur et le ***back-end*** sur un autre serveur, les deux communiquent à l'aide d'une API mis à disposition sur le port 7000 de l'application ***back-end***).

1. Modélisez le déploiement des vos applications chez le fournisseur d'hébergement [Kinsta](https://kinsta.com/fr/hebergement-application/node-js/) dont les étapes de déploiement sont spécifiés ci-après à l'aide d'un diagramme de composants et déploiement.

---

### Caractéritstiques de l'application front-end en production

- Utilisation de la librairie ***vue-js***
- Utilisation de la librairie axios qui permet de se connecter à l'API Node-JS

### Caractéritstiques de l'application back-end en production

- Utilisation de l'environnement ***Node-JS***
- Utilisation de la librairie ***bcrypt***
- Utilisation de la librairie ***jsonwebtoken***
- Utilisation de la libraire ***mysql***


L'application expose le ***port 7000*** pour pouvoir traiter les requêtes des applications front-end, mobile ou tierces qui peuvent se connecter pour solliciter des ressources. 

---

## Les étapes de Kinsta

1. Connectez Git
Connectez votre compte GitHub, Bitbucket ou GitLab à votre tableau de bord MyKinsta et sélectionnez votre dépôt Node.js.
2. Configurez votre machine
Sélectionnez votre centre de données, votre machine de construction et vos ressources serveur.
3. Déployez automatiquement
Utilisez Nixpacks ou Buildpacks pour détecter et installer les dépendances de votre application à partir de package.json, puis construisez et déployez.
4. Mise en ligne rapide
A partir de là, exécutez, reconstruisez et faites évoluer votre application comme vous le souhaitez.
<!-- 
https://fr.siteground.com/web-hosting.htm?mktafcode=2a8c6c6808fa19591465d9e35f8467f3&gclid=EAIaIQobChMI8NmJp4TlgQMVJpJoCR23EwFWEAAYASAAEgJ2uPD_BwE -->