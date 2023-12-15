import { Routes } from '@angular/router';
import { RapportComponent } from '../components/rapport/rapport.component';
import { RapportsComponent } from '../components/rapports/rapports.component';



export const routes: Routes = [    

{path: 'rapports', component: RapportComponent },
{path: 'rapports-list', component: RapportsComponent },
];