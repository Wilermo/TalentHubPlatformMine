import { Injectable } from '@angular/core';
import {convocatoria} from '../Entities/convocatoria';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  private apiUrl = 'https://662dcbbda7dda1fa378b4cfc.mockapi.io/create-aspirantes/convocatoria';
  constructor(private http: HttpClient) { }

  getConvocatorias(): Observable<convocatoria[]> {
    return this.http.get<convocatoria[]>(this.apiUrl);
  }
  editConvocatoria(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { status });
  }
  editConvocatoria1(id: number, status: string, tittleOffer: string, description: string, requirements: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, { status, tittleOffer, description, requirements });
  }
  agregarConvocatoria(convocatoria: convocatoria): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, convocatoria);
  }
  getConvocatoria(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
