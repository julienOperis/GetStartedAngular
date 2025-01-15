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
```

Comprendre les Composants (Components) , Liaison de Donn�es (Data Binding), Utiliser les Directives , Travailler avec les Services et l�Injection de D�pendances 
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
NgRx est une biblioth?que de gestion d'�tat pour les applications Angular, bas�e sur le mod?le Redux. Elle permet de centraliser, g�rer et synchroniser l'�tat (les donn�es) de l'application de mani?re pr�dictible et efficace. Voici une explication d�taill�e?:

* Input Parent vers l''enfant Oupout invers pour des composants
* Guards - Protection des routes (avoir acc?s que si on ? un compte ? telle route)
* Resolvers - Permet de faire des choses avant l''initialisation des pages, (Information du profil utilisateurs au chargement de la page utilisateur )
* Interceptors - Intecepter les requ?te http, pour la gestion d''erreur 
* Store - Service Angular ou (Librairies ngRx plus tard) Moyen de partager les donn�es sans qu''il soit parents


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

### **D�roulement du Code**

1. **R�cup�ration des donn�es du formulaire** :
   - `this.inscriptionForm.value` : extrait les donn�es saisies par l'utilisateur dans le formulaire.

2. **Appel au service `inscription$`** :
   - `this.inscriptionService.inscription$(...)` : envoie les donn�es du formulaire au backend via un service. Ce service renvoie un **Observable** contenant la r�ponse du serveur.

3. **Cha�nage des op�rateurs RxJS** :
   - `pipe(...)` : permet d'appliquer des transformations ou de g�rer les erreurs dans le flux d'observable.

   #### Op�rateurs utilis�s :
   - **`take(1)`** :
     - Ne prend en compte qu'une seule r�ponse du serveur (unsubscribe automatiquement apr?s la premi?re �mission).
   - **`catchError((error) => {...})`** :
     - En cas d'erreur (ex. : r�ponse HTTP avec un code 409 ou 500), l'erreur est captur�e.
     - La m�thode affiche un message d'erreur avec `this.alertService.setAlert('Une erreur est survenue')`.
     - `return EMPTY` : stoppe le flux d'observable sans �mettre d'autres �v�nements.
   - **`tap((reponse) => {...})`** :
     - Permet de g�rer une r�ponse r�ussie du serveur (ex. : code HTTP 201).
     - Actions effectu�es :
       - Appel de `this.serviceSuccess.setDataSuccess(reponse)` pour stocker les donn�es de succ?s.
       - Navigation vers la route `/connexion` avec `this.router.navigate(['/connexion'])`.

4. **Abonnement avec `subscribe()`** :
   - Finalise l'ex�cution de l'observable en d�clenchant le flux d�fini dans les �tapes pr�c�dentes.

# Structure d'un projet basique Angular

src
??? app
?   ??? components **Composants Angular**
?   ?   ??? alert
?   ?   ??? dialoggeneric
?   ?   ??? header
?   ??? core ** Angular**
?   ?   ??? models
?   ?   ??? services **Services Angular sont des classes d�di�es ? la logique m�tier et au partage des donn�es**
?   ?   ??? validators **validateur qui v�rifie la validit� des donn�es saisies**
?   ??? pages


## Service

# R�sum� des Services Angular

## Qu'est-ce qu'un Service Angular ?

Un **service** Angular est une classe qui fournit des fonctionnalit�s ou des comportements r�utilisables dans l'application. Les services permettent de centraliser la logique m�tier et de partager des donn�es ou des fonctionnalit�s entre les composants.

## Pourquoi utiliser des services ?

Les services permettent de :
- Centraliser la logique de l'application.
- Partager des donn�es entre diff�rents composants.
- Manipuler des donn�es de mani?re asynchrone (par exemple, via HTTP).
- Faciliter les tests unitaires en isolant la logique dans des classes d�di�es.

## Cr�ation d'un Service

Un service Angular est g�n�ralement cr�� avec la commande CLI suivante :
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

## Injection de D�pendance

Les services dans Angular utilisent l'injection de d�pendance (DI) pour ?tre fournis aux composants ou autres services. Cela permet ? Angular de g�rer la cr�ation et la gestion de l'instance du service.


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

### Voici quelques exemples de validateurs int�gr�s :

| **Validateur**             | **Description**                                        |
|----------------------------|-------------------------------------------------------|
| `Validators.required`      | V�rifie que le champ n'est pas vide.                  |
| `Validators.min(length)`   | V�rifie que la valeur est sup�rieure ou �gale ? un minimum. |
| `Validators.max(length)`   | V�rifie que la valeur est inf�rieure ou �gale ? un maximum. |
| `Validators.minLength(length)` | V�rifie que la longueur minimale est respect�e.         |
| `Validators.maxLength(length)` | V�rifie que la longueur maximale est respect�e.         |
| `Validators.pattern(regex)`    | V�rifie que la valeur correspond ? une expression r�guli?re. |

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

### **R�sum�**

Un validateur Angular est une m�thode cl� pour garantir la validit� des donn�es saisies dans les formulaires. Vous pouvez :

- **Utiliser des validateurs int�gr�s** pour des r?gles standard comme `Validators.required`, `Validators.minLength`, etc.
- **Cr�er vos propres validateurs personnalis�s** pour des cas sp�cifiques, comme v�rifier un domaine d'e-mail ou des r?gles m�tier particuli?res.
- **�tendre les validateurs avec des op�rations asynchrones** pour des v�rifications qui n�cessitent un appel r�seau (par exemple, v�rifier si un nom d'utilisateur existe d�j? dans une base de donn�es).

Cela am�liore :
- **La robustesse** des donn�es saisies.
- **La s�curit�** des informations collect�es.
- **La maintenabilit�** et la testabilit� des applications Angular.

Les validateurs permettent de garantir que les donn�es entrantes respectent les exigences avant d�?tre trait�es ou envoy�es ? un serveur.


# Tuto
## ANGULAR

[Comment afficher une bo�te de dialogue modale dans Angular](https://hackernoon.com/lang/fr/comment-afficher-une-bo%C3%AEte-de-dialogue-modale-en-angulaire)
**Installation**
```
npm install @developer-partners/ngx-modal-dialog
`