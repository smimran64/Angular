import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewAllStudent } from '../view-all-student/view-all-student';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 baseUrl : string ="http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  getAllStudent():Observable<any>{


    return this.http.get(this.baseUrl);
  }

  saveStudent(student:Student): Observable<any> {


    return this.http.post(this.baseUrl, student);
  }

deleteStudent(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
