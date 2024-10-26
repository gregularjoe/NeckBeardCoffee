import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoffee } from '../../../interfaces/icoffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<ICoffee[]> {
    return this.http.get<ICoffee[]>('http://localhost:3000/api/coffee');
  }
}
