import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentModel } from '../../api/models';
import { StudentService } from '../../services/student-service.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from '../../components/dialogs/student-details/student-details.component';
import { StudentView } from '../../api/enums';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports:[MatTableModule,DatePipe,MatPaginator,MatSortModule,MatIconModule,MatButtonModule]
})
export class HomeComponent implements OnInit {

  students:StudentModel[]=[]
  displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'email','mobile','gender','address',"operations"];
  studentViewEnum=StudentView
  dataSource:MatTableDataSource<StudentModel>=new MatTableDataSource<StudentModel>();
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private studentService:StudentService,private dialog:MatDialog){

    this.getAllStudents()
  }


  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
  }


  getAllStudents(){
    this.studentService.getAllStudents().subscribe({
      next:(res:StudentModel[])=>{
        console.log(res);
        
        if(res){
          this.students=res
          this.dataSource=new MatTableDataSource<StudentModel>(this.students)
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort
        }
      },
      error:(err:HttpErrorResponse)=> {
            console.error("Students Data GET ERROR",err);
            
      },
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showStudentDetails(student:StudentModel, state:StudentView){
    const dialogRef=this.dialog.open(StudentDetailsComponent,{
      width:"568px",
      height:"600px",
      maxWidth:"100%",
      minWidth:"568px",
      data:{
        studentId:student.id,
        state:state
      }
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log("StudentView Dialog Kapatıldı",result);
      
    })
  }

}
