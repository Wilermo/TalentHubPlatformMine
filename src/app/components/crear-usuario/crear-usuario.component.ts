import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/model/user.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  rol: string = '';
  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  enviarDatos(): void {
    if (this.rol) {
      this.userService.getAuthData(this.rol).subscribe({
        next: (data) => {
          this.userData = data;
          console.log('Data received:', data);
          // Puedes realizar más acciones aquí, como mostrar un mensaje de éxito o redirigir al usuario.
        },
        error: (err) => {
          console.error('Error fetching data:', err);
          // Implementa manejo de errores, como mostrar un mensaje de error.
        }
      });
    }
  }
}
