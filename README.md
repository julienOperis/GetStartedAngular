# Bien d�buter avec Angular

Angular est un framework puissant pour construire des applications web modernes. Ce guide vous aidera ? d�marrer et ? comprendre les bases d'Angular pour progresser efficacement.

## Pr�requis

Avant de commencer, assurez-vous de ma�triser les concepts de base suivants :
- **HTML** : pour structurer les composants.
- **CSS** : pour le style des composants.
- **JavaScript (et id�alement TypeScript)** : Angular est �crit en TypeScript, donc comprendre les bases de TypeScript est un plus.

## Installation des Outils N�cessaires

Pour utiliser Angular, vous aurez besoin de quelques outils :
1. **Node.js et npm** : Angular utilise `npm` pour g�rer les d�pendances.
   - [T�l�charger Node.js](https://nodejs.org/)
2. **Angular CLI** : La ligne de commande Angular est l'outil principal pour g�n�rer, d�velopper et tester les projets Angular.
   - Installez Angular CLI en ex�cutant :
     ```bash
     npm install -g @angular/cli
     ```

## Cr�er Votre Premier Projet Angular

Avec Angular CLI, cr�ez un projet de base :
```bash
ng new nom-du-projet
```
## Explorer la Structure d�un Projet Angular

Lorsqu'on cr�e un projet Angular avec Angular CLI, une structure de dossier est automatiquement g�n�r�e. Voici les dossiers principaux et leurs r�les :

- **src/app** : Contient les composants, services et autres fonctionnalit�s de l'application. C'est le dossier principal o? vous d�velopperez les fonctionnalit�s sp�cifiques de votre application.
- **app.module.ts** : Le module racine de l�application o? vous importez et d�clarez les composants, services et autres modules n�cessaires.
- **main.ts** : Fichier principal qui lance l'application Angular en utilisant `AppModule` comme module racine.
- **assets** : Dossier pour les fichiers statiques (images, fichiers JSON, etc.).
- **environments** : Dossier contenant les fichiers de configuration pour les environnements (par exemple, d�veloppement ou production).

Familiarisez-vous avec cette structure pour mieux organiser et d�velopper votre application.

---

## Comprendre les Composants (Components)

Les composants sont au c?ur d�Angular. Un composant est une classe TypeScript qui contr�le une partie de l�interface utilisateur (UI). Chaque composant est constitu� de trois �l�ments principaux :

1. **Fichier TypeScript (.ts)** : La logique du composant (fichier `.ts`) g?re les donn�es, les �v�nements, et les m�thodes.
2. **Fichier HTML (.html)** : Le template qui d�finit la structure et le contenu de l�interface utilisateur.
3. **Fichier CSS/SCSS (.css/.scss)** : Les styles associ�s au composant pour contr�ler son apparence.

Pour cr�er un composant avec Angular CLI :
```bash
ng generate component nom-du-composant
```

## Utiliser l'Op�rateur de D�composition (`...`) en TypeScript

L'op�rateur de d�composition (`...`) en TypeScript permet de **fusionner des objets** ou de **copier leurs propri�t�s** dans un nouvel objet. Cette syntaxe est simple et efficace pour concat�ner des objets ou cr�er des copies avec des modifications sp�cifiques.

### Exemple Basique : Fusion de Deux Objets

Supposons que vous avez deux objets avec certaines propri�t�s en commun et que vous voulez les fusionner dans un nouvel objet :

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }



Comprendre les Composants (Components) , Liaison de Donn�es (Data Binding), Utiliser les Directives , Travailler avec les Services et l�Injection de D�pendances 
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
# Store - Service Angular ou (Librairies ngRx plus tard) Moyen de partager les donn�es sans qu'il soit parents
