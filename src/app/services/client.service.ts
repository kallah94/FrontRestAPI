import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Client } from '../models/client';
import { Compte } from '../models/compte';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://parrot:8080/restFulService-1.0-SNAPSHOT/api';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<Client[]>(`${this.apiUrl}/client`);
  }

  // tslint:disable-next-line:typedef
  getAllComptes(clientId: number) {
    return this.http.get<Compte[]>(`${this.apiUrl}/client/${clientId}/comptes`);
  }

  // tslint:disable-next-line:typedef
  deleteClient(clientId: number) {
    return this.http.delete<string>(`${this.apiUrl}/client/${clientId}`);
  }

  createClient(client: Client): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.apiUrl}/client`, client, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  getClientById(id: number) {
    return this.http.get<Client> (`${this.apiUrl}/client/${id}`);
  }

   // tslint:disable-next-line:typedef
   updateClient(updateClient: Client): Observable<HttpResponse<string>>{
     return this.http.put<string>(`${this.apiUrl}/client/${updateClient.id}`, updateClient, {observe: 'response'});
   }
}
