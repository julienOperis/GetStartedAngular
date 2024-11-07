# Bien débuter avec Angular

Angular est un framework puissant pour construire des applications web modernes. Ce guide vous aidera ? démarrer et ? comprendre les bases d'Angular pour progresser efficacement.

## Prérequis

Avant de commencer, assurez-vous de maîtriser les concepts de base suivants :
- **HTML** : pour structurer les composants.
- **CSS** : pour le style des composants.
- **JavaScript (et idéalement TypeScript)** : Angular est écrit en TypeScript, donc comprendre les bases de TypeScript est un plus.

## Installation des Outils Nécessaires

Pour utiliser Angular, vous aurez besoin de quelques outils :
1. **Node.js et npm** : Angular utilise `npm` pour gérer les dépendances.
   - [Télécharger Node.js](https://nodejs.org/)
2. **Angular CLI** : La ligne de commande Angular est l'outil principal pour générer, développer et tester les projets Angular.
   - Installez Angular CLI en exécutant :
     ```bash
     npm install -g @angular/cli
     ```

## Créer Votre Premier Projet Angular

Avec Angular CLI, créez un projet de base :
```bash
ng new nom-du-projet
```
## Explorer la Structure d’un Projet Angular

Lorsqu'on crée un projet Angular avec Angular CLI, une structure de dossier est automatiquement générée. Voici les dossiers principaux et leurs rôles :

- **src/app** : Contient les composants, services et autres fonctionnalités de l'application. C'est le dossier principal o? vous développerez les fonctionnalités spécifiques de votre application.
- **app.module.ts** : Le module racine de l’application o? vous importez et déclarez les composants, services et autres modules nécessaires.
- **main.ts** : Fichier principal qui lance l'application Angular en utilisant `AppModule` comme module racine.
- **assets** : Dossier pour les fichiers statiques (images, fichiers JSON, etc.).
- **environments** : Dossier contenant les fichiers de configuration pour les environnements (par exemple, développement ou production).

Familiarisez-vous avec cette structure pour mieux organiser et développer votre application.

---

## Comprendre les Composants (Components)

Les composants sont au c?ur d’Angular. Un composant est une classe TypeScript qui contrôle une partie de l’interface utilisateur (UI). Chaque composant est constitué de trois éléments principaux :

1. **Fichier TypeScript (.ts)** : La logique du composant (fichier `.ts`) g?re les données, les événements, et les méthodes.
2. **Fichier HTML (.html)** : Le template qui définit la structure et le contenu de l’interface utilisateur.
3. **Fichier CSS/SCSS (.css/.scss)** : Les styles associés au composant pour contrôler son apparence.

Pour créer un composant avec Angular CLI :
```bash
ng generate component nom-du-composant
```

## Utiliser l'Opérateur de Décomposition (`...`) en TypeScript

L'opérateur de décomposition (`...`) en TypeScript permet de **fusionner des objets** ou de **copier leurs propriétés** dans un nouvel objet. Cette syntaxe est simple et efficace pour concaténer des objets ou créer des copies avec des modifications spécifiques.

### Exemple Basique : Fusion de Deux Objets

Supposons que vous avez deux objets avec certaines propriétés en commun et que vous voulez les fusionner dans un nouvel objet :

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }



Comprendre les Composants (Components) , Liaison de Données (Data Binding), Utiliser les Directives , Travailler avec les Services et l’Injection de Dépendances 
# GetStartedAngular
GetStartedAngular
https://ngrx.io/
https://rxjs.dev/api/operators/
operator typescript

npm install @developer-partners/ngx-modal-dialog
https://hackernoon.com/lang/fr/comment-afficher-une-bo%C3%AEte-de-dialogue-modale-en-angulaire

https://primeng.org
Back
https://nestjs.com/

https://tailwindcss.com/

https://coder.com/docs/install/docker


https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap

si tu veux faire du mobile en m?me temps que du web tu peux utiliser Ionic avec Angular
Cest un framework qui vient au dessus d'angular et qui permet d'avoir le m?me code pour web, ios et android
https://ionicframework.com/

tu peux utiliser ngx-translate avec Angula tu auras un JSON par langue  et ton appli peux switcher de l'un a l'autre

https://rxmarbles.com/
https://rxjs.dev/guide/operators


# Input Parent vers l'enfant Oupout invers pour des composants
# Guards - Protection des routes (avoir acc?s que si on ? un compte ? telle route)
# Resolvers - Permet de faire des choses avant l'initialisation des pages, (Information du profil utilisateurs au chargement de la page utilisateur )
# Interceptors - Intecepter les requ?te http, pour la gestion d'erreur 
# Store - Service Angular ou (Librairies ngRx plus tard) Moyen de partager les données sans qu'il soit parents
