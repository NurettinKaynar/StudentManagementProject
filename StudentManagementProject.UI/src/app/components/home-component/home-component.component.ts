import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { StudentService } from '../../services/student-service.service';

@Component({
  selector: 'app-home-compenent',
  standalone: true,
  templateUrl: './home-component.component.html',
  imports:[NavbarComponent],
  providers:[StudentService]
})
export class HomeComponent {

  constructor(
    private StudentService:StudentService
  ){}

  getAllStudent(){}
}
