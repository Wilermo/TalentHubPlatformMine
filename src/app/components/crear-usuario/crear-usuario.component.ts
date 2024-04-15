import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/model/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/model/auth/user';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nuevoUsuario: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarDatos(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Datos que se envían:', this.nuevoUsuario);
      this.userService.createUser(this.nuevoUsuario, this.nuevoUsuario.role, token).subscribe({
        next: (data) => {
          console.log('Respuesta recibida:', data);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Error al enviar datos:', err);
        }
      });
      
    } else {
      console.error('No se encontró el token de autenticación');
      this.router.navigate(['/login']);
    }
  }
  
}
