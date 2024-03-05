import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StudentView } from '../../../api/enums';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../services/student-service.service';
import { StudentModel } from '../../../api/models';
import { HttpErrorResponse } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatIconModule,CommonModule,MatInputModule],
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  StudentViewEnum=StudentView
  studentData!:StudentModel
  constructor( 
    @Inject(MAT_DIALOG_DATA) 
    public data: {studentId: string,state:StudentView},
    private studentService:StudentService
    ){
      if(data){
        this.getStudentData(data.studentId)
      }
    }


    getStudentData(studentId:string){
      this.studentService.getStudent(studentId).subscribe({
        next:(res:StudentModel)=>{
          if(res){
            this.studentData=res
          }
        },
        error:(err:HttpErrorResponse)=>{
          console.error("StudentData Not Get",err);
          
        }
      })
    }
}
