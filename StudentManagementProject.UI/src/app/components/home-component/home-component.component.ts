import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home-compenent',
  standalone: true,
  templateUrl: './home-component.component.html',
  imports:[NavbarComponent]
})
export class HomeComponent {

}
