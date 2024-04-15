import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent {
  codigo: string = '';
  cuponCanjeado: boolean = false;
  showError: boolean = false; // Variable para controlar si se muestra el mensaje de error

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (!this.codigo.trim()) {
      this.showError = true; // Muestra el mensaje de error si el campo está vacío
      return;
    }

    this.showError = false; // Reinicia la variable showError si el campo no está vacío

    this.http.post<any>('URL_DEL_BACKEND/login', { codigo: this.codigo })
      .subscribe(
        response => {
          console.log('Respuesta del backend:', response);
          if (response.success) {
            this.cuponCanjeado = true;
          }
        },
        error => {
          console.error('Error al enviar el código:', error);
        }
      );
  }
}
