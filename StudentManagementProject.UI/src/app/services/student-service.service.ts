import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../api';
import { ApiPath } from '../constants/ApiPaths';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${ApiPath.BASE_URL}${ApiPath.STUDENTS}`);
  }
}
