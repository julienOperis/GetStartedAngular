import { Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.page';
import { ConnexionComponent } from './pages/connexion/connexion.page';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.page';

export const routes: Routes = [
    { path: 'inscription', component: InscriptionComponent},
    { path: 'connexion', component: ConnexionComponent},
    { path: '', component: ConnexionComponent },
    { path: '**', component: PageNotFoundComponent }
    //{ path: 'inscription', component: InscriptionComponent}
];
