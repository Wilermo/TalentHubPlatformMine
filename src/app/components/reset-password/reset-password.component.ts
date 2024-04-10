import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  contrasena: string = '';
  contrasena_c: string = '';
  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.contrasena && this.contrasena_c) {
      // Send Credentials
      this.http.post<any>('URL_DEL_BACKEND/login', { usuario: this.contrasena, contrasena_c: this.contrasena_c })
        .subscribe(
          response => {
            // Manage the answer
            console.log('Respuesta del backend:', response);
          },
          error => {
            //Error
            console.error('Error al enviar las credenciales:', error);
          }
        );
    }
  }
}
