import { Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.page';
import { ConnexionComponent } from './pages/connexion/connexion.page';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.page';
import { AcceuileComponent } from './pages/accueil/accueil.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
  { path: 'accueil', component: AcceuileComponent, canActivate: [AuthGuard] }, // Utilisation du guard}
  { path: 'profil', component: ProfilComponent , canActivate: [AuthGuard] }, // Utilisation du guard}
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', component: ConnexionComponent },
  { path: '**', component: PageNotFoundComponent },
  //{ path: 'Tableau de bord', component: TableauDeBordComponent, canActivate: [AuthGuard], // Utilisation du guard}
];
