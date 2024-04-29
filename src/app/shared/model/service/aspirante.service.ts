import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable, of } from 'rxjs';
import { aspirante } from '../Entities/aspirante';

@Injectable({
  providedIn: 'root',
})
export class AspiranteService {
  private apiUrl = 'https://662dcbbda7dda1fa378b4cfc.mockapi.io/create-aspirantes/aspirante';

  constructor(private http: HttpClient) { }



  getAspirantes(): Observable<aspirante[]> {
    return this.http.get<aspirante[]>(this.apiUrl);
  }
  editAspirante(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { status });
  }
  editAspirante1(id: number, status: string, email: string, university: string, nameEmergencyContact: string, emergencyContact: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { status, email, university, nameEmergencyContact, emergencyContact });
  }
  agregarAspirante(aspirante: aspirante): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, aspirante);
  }
  getAspirante(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
