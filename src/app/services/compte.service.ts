import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Compte } from '../models/compte';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  apiUrl = 'http://parrot:8080/restFulService-1.0-SNAPSHOT/api';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<Compte[]>(`${this.apiUrl}/compte`);
  }

  // tslint:disable-next-line:typedef
  deleteCompte(id: number) {
    return this.http.delete<string>(`${this.apiUrl}/compte/${id}`);
  }

  createCompte(compte: Compte): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.apiUrl}/compte`, compte, {observe: 'response'});
  }


   // tslint:disable-next-line:typedef
  getCompteById(id: number) {
    return this.http.get<Compte>(`${this.apiUrl}/compte/${id}`);
  }

  updateCompte(updateCompte: Compte): Observable<HttpResponse<string>> {
    return this.http.put<string>(`${this.apiUrl}/compte/${updateCompte.id}`, updateCompte, {observe: 'response'});
  }
}
