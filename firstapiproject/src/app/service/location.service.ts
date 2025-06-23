import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl: string = "http://localhost:3000/locations";

  constructor(private http: HttpClient) { }

  getAllLocation() {

    return this.http.get(this.baseUrl);

  }
}
