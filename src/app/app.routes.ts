import { Routes } from '@angular/router';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ReclamationDetailsComponent } from './reclamation-details/reclamation-details.component';
import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { LoginComponent } from './login/login.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RapportsComponent } from './rapports/rapports.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationComponent } from '../components/notifications/notifications.component';


export const routes: Routes = [    
{path: 'reclamations', component: ReclamationsComponent },
{path: 'reclamation/:id', component: ReclamationDetailsComponent },
{path: 'creer-reclamation', component: ReclamationFormComponent },
{path: 'modifier-reclamation/:id', component: ReclamationFormComponent },
{path: 'login', component: LoginComponent },
{path: 'historique', component: HistoriqueComponent },
{path: 'rapports', component: RapportsComponent },
{path: 'users', component: UsersComponent },
{path: 'user/:id', component: UserDetailsComponent },
{path: 'creer-user', component: UserFormComponent },    
{path: 'modifier-user/:id', component: UserFormComponent },  
{path: '**', component: PageNotFoundComponent },  
{path: 'notifications', component: NotificationComponent },
];
