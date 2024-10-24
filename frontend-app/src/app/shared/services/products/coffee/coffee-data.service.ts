import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<any[]> {
    console.log("Coffee Service:", this.http.get<any>('http://localhost:3000/api/coffee'))
    return this.http.get<any>('http://localhost:3000/api/coffee');
  }
}
