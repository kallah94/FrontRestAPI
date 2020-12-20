import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Agence } from '../models/agence';
import { Compte } from '../models/compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  apiUrl = 'http://parrot:8080/restFulService-1.0-SNAPSHOT/api';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<Agence[]>(`${this.apiUrl}/agence`);
  }

  // tslint:disable-next-line:typedef
  getAllComptes(agenceId: number) {
    return this.http.get<Compte[]>(`${this.apiUrl}/agence/${agenceId}/comptes`);
  }

  // tslint:disable-next-line:typedef
  deleteAgence(agenceId: number) {
    return this.http.delete(`${this.apiUrl}/agence/${agenceId}`);
  }

  // tslint:disable-next-line:typedef
  createAgence(agence: Agence): Observable<HttpResponse<string>>{
    return this.http.post<string>(`${this.apiUrl}/agence`, agence, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  getAgenceById(id: number) {
    return this.http.get<Agence>(`${this.apiUrl}/agence/${id}`);
  }

  updateAgence(updateAgence: Agence): Observable<HttpResponse<string>> {
    return this.http.put<string>(`${this.apiUrl}/agence/${updateAgence.id}`, updateAgence, {observe: 'response'});
  }
}
