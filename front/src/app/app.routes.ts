import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    { path: 'inscription', component: InscriptionComponent},
    { path: '', component: ConnexionComponent },
    { path: '**', component: PageNotFoundComponent }
    //{ path: 'inscription', component: InscriptionComponent}
];
