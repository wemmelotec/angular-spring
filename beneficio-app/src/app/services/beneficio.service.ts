import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficio } from '../models/beneficio';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})

export class BeneficioService {

  private apiUrl = 'http://localhost:8080/api/beneficios';

  constructor(private http: HttpClient) { }

  getBeneficio(id: number): Observable<Beneficio> {
    return this.http.get<Beneficio>(`${this.apiUrl}/${id}`);
  }

  getBeneficiosByCliente(id: number): Observable<Beneficio[]> {
    return this.http.get<Beneficio[]>(`${this.apiUrl}/${id}/beneficios`);
  }

  addBeneficio(id: number, beneficio: Beneficio): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/${id}/beneficios`, beneficio);
  }

  deleteBeneficio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
