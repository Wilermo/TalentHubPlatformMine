import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // Método para obtener datos según el rol
  getAuthData(role: string): Observable<any> {
    const url = `${environment.authURL}/${role}`; 
    return this.http.get(url);
  }
}
