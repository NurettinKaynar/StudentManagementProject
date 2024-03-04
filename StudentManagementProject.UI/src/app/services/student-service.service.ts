import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/ApiPaths';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor( private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(`${ApiPath.BASE_URL}/${ApiPath.STUDENTS}`)
  }
}
