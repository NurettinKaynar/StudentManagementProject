import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentModel } from '../../api';
import { StudentService } from '../../services/student-service.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports:[MatTableModule,DatePipe,MatPaginator,MatSortModule,MatIconModule]
})
export class HomeComponent implements OnInit {

  students:StudentModel[]=[]
  displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'email','mobile','gender','address'];
  dataSource:MatTableDataSource<StudentModel>=new MatTableDataSource<StudentModel>();
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private studentService:StudentService){

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

}
