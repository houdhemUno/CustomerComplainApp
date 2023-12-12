import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon' ;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule,RouterModule,MatMenuModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
