import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent {
  codigo: string = '';
  constructor(private http: HttpClient) {}
  cuponCanjeado: boolean = false;

  onSubmit(): void {
    if (this.codigo) {
      // Envía la petición al backend
      this.http.post<any>('URL_DEL_BACKEND/login', { codigo: this.codigo})
        .subscribe(
          response => {
            // Maneja la respuesta del backend
            console.log('Respuesta del backend:', response);
            // Si la respuesta indica éxito, establece cuponCanjeado en true
            if (response.success) {
              this.cuponCanjeado = true;
            }
          },
          error => {
            // Error
            console.error('Error al enviar las credenciales:', error);
          }
        );
    }
  }

}
