import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private urlBase: String = "http://localhost:8080/api";
  // private urlBase: String = "https://springangularapi.azurewebsites.net/api";
  // private urlBase = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlBase}/sinhviens`);
  }

  getAllStudentsByMaLop(maLop: String): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlBase}/sinhviens/${maLop}`);
  }

  getStudentByMasv(masv: String): Observable<Student> {
    return this.http.get<Student>(`${this.urlBase}/sinhvien/${masv}`);
  }

  addStudent(maLop: String, student: Student): Observable<Object> {
    return this.http.post<Object>(`${this.urlBase}/sinhvien/${maLop}`, student);
  }

  updateStudent(masv:String, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.urlBase}/sinhvien/${masv}`, student);
  }

  deleteStudent(masv: String): Observable<Object> {
    return this.http.delete<Object>(`${this.urlBase}/sinhvien/${masv}`);
  }

}
