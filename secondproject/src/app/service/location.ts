import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Location {
  baseUrl: string = "http://localhost:3000/locations";

  constructor(private http: HttpClient) { }

  getAllLocation(): Observable<any>{
    
    return this.http.get(this.baseUrl);
  }
}
