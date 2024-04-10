import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.usuario && this.contrasena) {
      // Send Credentials
      this.http.post<any>('URL_DEL_BACKEND/login', { usuario: this.usuario, contrasena: this.contrasena })
        .subscribe(
          response => {
            // Manage the answer
            console.log('Respuesta del backend:', response);
          },
          error => {
            // Manage Error
            console.error('Error al enviar las credenciales:', error);
          }
        );
    }
  }
}
