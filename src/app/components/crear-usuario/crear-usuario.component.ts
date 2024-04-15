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
  // Usuario inicializado con valores por defecto
  nuevoUsuario: User = new User();

  // Ya no necesitas definir las propiedades individuales aquí, 
  // ya que las manejarás dentro del objeto nuevoUsuario

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarDatos(): void {
    // Mostrar los datos en la consola
    console.log('Datos que se envían:', this.nuevoUsuario);
  
    // Lógica para enviar los datos, por ejemplo, a través de un servicio HTTP
    this.userService.createUser(this.nuevoUsuario, this.nuevoUsuario.role).subscribe({
      next: (data) => {
        // Manejar la respuesta
        console.log('Respuesta recibida:', data);
        
        // Navegar a otra ruta si es necesario
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Error al enviar datos:', err);
      }
    });
  }  
}
