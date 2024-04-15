import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './auth/user'; // Asegúrate de que la ruta de importación es correcta

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // Método para crear un usuario
  createUser(user: User, role: string): Observable<User> {
    const url = `${environment.authURL}/${role}`;
    return this.http.post<User>(url, user);
  }
}
