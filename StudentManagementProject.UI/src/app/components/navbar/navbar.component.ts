import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar,RouterLink,RouterLinkActive,MatMenuModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
