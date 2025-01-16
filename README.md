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
```

Comprendre les Composants (Components) , Liaison de Données (Data Binding), Utiliser les Directives , Travailler avec les Services et l’Injection de Dépendances 
# GetStartedAngular
GetStartedAngular
https://ngrx.io/
https://rxjs.dev/api/operators/
operator typescript


* [https://primeng.org](The Next-Gen UI Suite for Angular)
* [A progressive Node.js framework for building efficient, reliable and scalable server-side applications.](https://nestjs.com/)
* [Rapidly build modern websites without ever leaving your HTML](https://tailwindcss.com/)

**Docker**
* [You can install and run Coder using the official Docker images published on GitHub Container Registry.](https://coder.com/docs/install/docker)

**An import map is a JSON object that allows developers to control how the browser resolves module specifiers when importing**
* [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)

**ionicframework est un framework qui vient au dessus d''angular et qui permet d''avoir le m?me code pour web, ios et android**
* [Ionic avec Angular Pour faire une application mobile en m?me temps que du web](https://ionicframework.com/)
* [Application angular multi-langue avec ngx-translate](https://ngx-translate.org/)
* [Interactive diagrams of Rx Observables](https://rxmarbles.com/)
* [RxJS Operators](https://rxjs.dev/guide/operators)
**NgRx**
* [NgRx](https://ngrx.io/)
NgRx est une biblioth?que de gestion d'état pour les applications Angular, basée sur le mod?le Redux. Elle permet de centraliser, gérer et synchroniser l'état (les données) de l'application de mani?re prédictible et efficace. Voici une explication détaillée?:

* Input Parent vers l''enfant Oupout invers pour des composants
* Guards - Protection des routes (avoir acc?s que si on ? un compte ? telle route)
* Resolvers - Permet de faire des choses avant l''initialisation des pages, (Information du profil utilisateurs au chargement de la page utilisateur )
* Interceptors - Intecepter les requ?te http, pour la gestion d''erreur 
* Store - Service Angular ou (Librairies ngRx plus tard) Moyen de partager les données sans qu''il soit parents


# Observable exemple d'utilisation

```TS
 public inscription(): void {
    //Observable<User>

    this.inscriptionService
      .inscription$(this.inscriptionForm.value)
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.alertService.setAlert('Une erreur est survenue');
          return EMPTY; //Couper le flux,
        }),
        tap((reponse) => {
          this.serviceSuccess.setDataSuccess(reponse);
          this.router.navigate(['/connexion']);
        })
      )
      .subscribe();
    //status: 409, error statusCode	409
    //status: 201, Create
  }
```

### **Déroulement du Code**

1. **Récupération des données du formulaire** :
   - `this.inscriptionForm.value` : extrait les données saisies par l'utilisateur dans le formulaire.

2. **Appel au service `inscription$`** :
   - `this.inscriptionService.inscription$(...)` : envoie les données du formulaire au backend via un service. Ce service renvoie un **Observable** contenant la réponse du serveur.

3. **Chaînage des opérateurs RxJS** :
   - `pipe(...)` : permet d'appliquer des transformations ou de gérer les erreurs dans le flux d'observable.

   #### Opérateurs utilisés :
   - **`take(1)`** :
     - Ne prend en compte qu'une seule réponse du serveur (unsubscribe automatiquement apr?s la premi?re émission).
   - **`catchError((error) => {...})`** :
     - En cas d'erreur (ex. : réponse HTTP avec un code 409 ou 500), l'erreur est capturée.
     - La méthode affiche un message d'erreur avec `this.alertService.setAlert('Une erreur est survenue')`.
     - `return EMPTY` : stoppe le flux d'observable sans émettre d'autres événements.
   - **`tap((reponse) => {...})`** :
     - Permet de gérer une réponse réussie du serveur (ex. : code HTTP 201).
     - Actions effectuées :
       - Appel de `this.serviceSuccess.setDataSuccess(reponse)` pour stocker les données de succ?s.
       - Navigation vers la route `/connexion` avec `this.router.navigate(['/connexion'])`.

4. **Abonnement avec `subscribe()`** :
   - Finalise l'exécution de l'observable en déclenchant le flux défini dans les étapes précédentes.

# Structure d'un projet basique Angular

src
??? app
?   ??? components **Composants Angular**
?   ?   ??? alert
?   ?   ??? dialoggeneric
?   ?   ??? header
?   ??? core ** Angular**
?   ?   ??? models
?   ?   ??? services **Services Angular sont des classes dédiées ? la logique métier et au partage des données**
?   ?   ??? validators **validateur qui vérifie la validité des données saisies**
?   ??? pages


## Service

# Résumé des Services Angular

## Qu'est-ce qu'un Service Angular ?

Un **service** Angular est une classe qui fournit des fonctionnalités ou des comportements réutilisables dans l'application. Les services permettent de centraliser la logique métier et de partager des données ou des fonctionnalités entre les composants.

## Pourquoi utiliser des services ?

Les services permettent de :
- Centraliser la logique de l'application.
- Partager des données entre différents composants.
- Manipuler des données de mani?re asynchrone (par exemple, via HTTP).
- Faciliter les tests unitaires en isolant la logique dans des classes dédiées.

## Création d'un Service

Un service Angular est généralement créé avec la commande CLI suivante :
```bash
ng generate service service-name
```

```TS
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Rend le service disponible dans toute l'application
})
export class DataService {
  constructor() {}

  getData() {
    return 'Some data';
  }
}
```

## Injection de Dépendance

Les services dans Angular utilisent l'injection de dépendance (DI) pour ?tre fournis aux composants ou autres services. Cela permet ? Angular de gérer la création et la gestion de l'instance du service.


Exemple d'Injection dans un Composant

```TS
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-my-component',
  template: '<div>{{ data }}</div>',
})
export class MyComponent implements OnInit {
  data: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
```


## Validators

### Voici quelques exemples de validateurs intégrés :

| **Validateur**             | **Description**                                        |
|----------------------------|-------------------------------------------------------|
| `Validators.required`      | Vérifie que le champ n'est pas vide.                  |
| `Validators.min(length)`   | Vérifie que la valeur est supérieure ou égale ? un minimum. |
| `Validators.max(length)`   | Vérifie que la valeur est inférieure ou égale ? un maximum. |
| `Validators.minLength(length)` | Vérifie que la longueur minimale est respectée.         |
| `Validators.maxLength(length)` | Vérifie que la longueur maximale est respectée.         |
| `Validators.pattern(regex)`    | Vérifie que la valeur correspond ? une expression réguli?re. |

#### Exemple d'utilisation :
```typescript
import { FormBuilder, Validators } from '@angular/forms';

export class ExampleComponent {
  myForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.min(18), Validators.max(99)]]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.myForm.valid) {
      console.log('Formulaire valide?:', this.myForm.value);
    } else {
      console.log('Formulaire invalide?!');
    }
  }
}
```

### **Résumé**

Un validateur Angular est une méthode clé pour garantir la validité des données saisies dans les formulaires. Vous pouvez :

- **Utiliser des validateurs intégrés** pour des r?gles standard comme `Validators.required`, `Validators.minLength`, etc.
- **Créer vos propres validateurs personnalisés** pour des cas spécifiques, comme vérifier un domaine d'e-mail ou des r?gles métier particuli?res.
- **Étendre les validateurs avec des opérations asynchrones** pour des vérifications qui nécessitent un appel réseau (par exemple, vérifier si un nom d'utilisateur existe déj? dans une base de données).

Cela améliore :
- **La robustesse** des données saisies.
- **La sécurité** des informations collectées.
- **La maintenabilité** et la testabilité des applications Angular.

Les validateurs permettent de garantir que les données entrantes respectent les exigences avant d’?tre traitées ou envoyées ? un serveur.


# Tuto
## ANGULAR

[Get started Javascript](https://www.w3schools.com/js/)

[Get started TypeScript](https://www.typescriptlang.org/fr/docs/handbook/typescript-in-5-minutes.html)

[Get started with The Angular CLI](https://angular.dev/tools/cli)

[Get started with rxjs](https://rxjs.dev/guide/overview)

[Stocker un état dans un service avec BehaviorSubject ](https://angular.fr/services/behavior-subject)

[Comment afficher une boîte de dialogue modale dans Angular](https://hackernoon.com/lang/fr/comment-afficher-une-bo%C3%AEte-de-dialogue-modale-en-angulaire)


**Installation**
```
npm install @developer-partners/ngx-modal-dialog
```

# Les Opérateurs en TypeScript

TypeScript, étant une surcouche de JavaScript, prend en charge les m?mes opérateurs que JavaScript. Voici une liste détaillée des différents types d'opérateurs avec des exemples et explications.

---

## 1. **Opérateurs Arithmétiques**
Utilisés pour effectuer des calculs mathématiques.

| Opérateur | Description         | Exemple          | Résultat  |
|-----------|---------------------|------------------|-----------|
| `+`       | Addition            | `5 + 2`          | `7`       |
| `-`       | Soustraction        | `5 - 2`          | `3`       |
| `*`       | Multiplication      | `5 * 2`          | `10`      |
| `/`       | Division            | `5 / 2`          | `2.5`     |
| `%`       | Modulo (reste)      | `5 % 2`          | `1`       |
| `++`      | Incrémentation      | `let a = 5; a++` | `6`       |
| `--`      | Décrémentation      | `let a = 5; a--` | `4`       |

---

## 2. **Opérateurs de Comparaison**
Utilisés pour comparer deux valeurs et retourner un booléen (`true` ou `false`).

| Opérateur | Description                        | Exemple          | Résultat |
|-----------|------------------------------------|------------------|----------|
| `==`      | Égalité de valeur                 | `5 == '5'`       | `true`   |
| `===`     | Égalité stricte (valeur + type)   | `5 === '5'`      | `false`  |
| `!=`      | Différence de valeur             | `5 != '5'`       | `false`  |
| `!==`     | Différence stricte               | `5 !== '5'`      | `true`   |
| `<`       | Inférieur ?                      | `5 < 10`         | `true`   |
| `>`       | Supérieur ?                      | `5 > 10`         | `false`  |
| `<=`      | Inférieur ou égal                | `5 <= 5`         | `true`   |
| `>=`      | Supérieur ou égal                | `5 >= 6`         | `false`  |

---

## 3. **Opérateurs Logiques**
Utilisés pour combiner plusieurs conditions.

| Opérateur | Description                     | Exemple                  | Résultat |
|-----------|---------------------------------|--------------------------|----------|
| `&&`      | ET logique                     | `true && false`          | `false`  |
| `||`      | OU logique                     | `true || false`          | `true`   |
| `!`       | NON logique (négation)         | `!true`                  | `false`  |

---

## 4. **Opérateurs Bit-?-Bit**
Op?rent directement sur les représentations binaires des nombres.

| Opérateur | Description                     | Exemple        | Résultat |
|-----------|---------------------------------|----------------|----------|
| `&`       | ET bit-?-bit                   | `5 & 1`        | `1`      |
| `|`       | OU bit-?-bit                  | `5 | 1`        | `5`      |
| `^`       | OU exclusif (XOR)             | `5 ^ 1`        | `4`      |
| `~`       | NON bit-?-bit                 | `~5`           | `-6`     |
| `<<`      | Décalage ? gauche             | `5 << 1`       | `10`     |
| `>>`      | Décalage ? droite             | `5 >> 1`       | `2`      |
| `>>>`     | Décalage ? droite sans signe  | `5 >>> 1`      | `2`      |

---

## 5. **Opérateurs d'Assignation**
Utilisés pour attribuer une valeur ? une variable.

| Opérateur | Description                  | Exemple      | Résultat |
|-----------|------------------------------|--------------|----------|
| `=`       | Assignation simple           | `a = 5`      | `a = 5`  |
| `+=`      | Addition et assignation      | `a += 2`     | `a = 7`  |
| `-=`      | Soustraction et assignation  | `a -= 2`     | `a = 3`  |
| `*=`      | Multiplication et assignation| `a *= 2`     | `a = 10` |
| `/=`      | Division et assignation      | `a /= 2`     | `a = 2.5`|
| `%=`      | Modulo et assignation        | `a %= 2`     | `a = 1`  |

---

## 6. **Opérateur Ternaire**
Simplifie les expressions conditionnelles.

**Syntaxe :**
```typescript
condition ? valeurSiVrai : valeurSiFaux;
```

**Exemple :**
```typescript
const age = 18;
const isAdult = age >= 18 ? 'Oui' : 'Non'; // Résultat : 'Oui'
```

---

## 7. **Opérateurs de Chaîne**

| Opérateur | Description             | Exemple             | Résultat         |
|-----------|-------------------------|---------------------|------------------|
| `+`       | Concaténation de chaîne| `'Hello' + 'World'` | `'HelloWorld'`   |
| `+=`      | Concaténation et assignation | `a += 'World'` | `a = 'HelloWorld'` |

---

## 8. **Opérateurs de Type (TypeScript)**
Spécifiques ? TypeScript pour vérifier ou convertir des types.

| Opérateur | Description                             | Exemple                       | Résultat          |
|-----------|-----------------------------------------|-------------------------------|-------------------|
| `typeof`  | Renvoie le type d'une variable         | `typeof 42`                  | `'number'`        |
| `instanceof` | Vérifie si un objet appartient ? une classe | `obj instanceof MyClass` | `true / false`    |
| `as`      | Conversion de type explicite           | `value as string`            | `string`          |
| `<type>`  | Conversion de type (alternative ? `as`) | `<string>value`              | `string`          |

---

## 9. **Opérateurs Optionnels (TypeScript)**

### a. **Opérateur de Chaînage Optionnel (`?.`)**
Permet d'accéder ? une propriété sans vérifier explicitement si l'objet est défini.

**Exemple :**
```typescript
const user = { name: 'John', address: null };
console.log(user?.address?.city); // Résultat : undefined
```

### b. **Opérateur de Coalescence Nulle (`??`)**
Retourne la valeur de droite uniquement si la valeur de gauche est `null` ou `undefined`.

**Exemple :**
```typescript
const name = null;
const defaultName = name ?? 'Anonymous'; // Résultat : 'Anonymous'
```

---

## 10. **Opérateurs Avancés (ES6+)**

| Opérateur          | Description                               | Exemple                        | Résultat           |
|--------------------|-------------------------------------------|--------------------------------|--------------------|
| `...` (spread)     | Étale les éléments d'un tableau ou objet  | `[...array1, ...array2]`      | Nouveau tableau    |
| `...` (rest)       | Rassemble les arguments restants          | `function(...args) {}`        | Tableau d'arguments|

---

Ce guide couvre les opérateurs les plus couramment utilisés en TypeScript. Pour aller plus loin, vous pouvez explorer leur comportement spécifique dans le contexte de types complexes et de fonctionnalités avancées de TypeScript.


# Tâche en cours
## AFAIRE

* Remonte les erreurs du back au Front dans l'alert
* Faire la session avec le LocalStorage
