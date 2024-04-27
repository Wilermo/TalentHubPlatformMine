import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable, of } from 'rxjs';
import { aspirante } from './Entities/aspirante';

@Injectable({
  providedIn: 'root',
})
export class AspiranteService {
  private apiUrl = 'https://tu-backend.com/api/aspirantes';

  constructor(private http: HttpClient) {} 

  // Método para obtener aspirantes (simulado)
  /*
  getAspirantes(): Observable<aspirante[]> {
    
    const aspirantes: aspirante[] = [
      { name: 'John', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John1', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John2', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John3', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John4', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John5', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John6', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John8', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John9', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John10', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John11', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John12', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John13', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John14', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John15', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John16', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John18', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John19', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
      { name: 'John20', email: 'john@gmail.com', Convocatoria: 'Sistemas', Estado: 'Activo' },
    ];
    return of(aspirantes);
    }
*/
  
  getAspirantes(): Observable<aspirante[]> {
    return this.http.get<aspirante[]>(this.apiUrl); 
  }
}
