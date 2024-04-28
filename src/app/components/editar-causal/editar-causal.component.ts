import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Causal } from 'src/app/shared/model/Entities/causal';
import { CausalService } from 'src/app/shared/model/causal.service';
import { AuthService } from 'src/app/service/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-editar-causal',
  templateUrl: './editar-causal.component.html',
  styleUrls: ['./editar-causal.component.css']
})
export class EditarCausalComponent implements OnInit {
  causal: Causal = new Causal(0, '', '', ''); // Inicializar con valores vacíos
  usuarioActual: string = 'Admin'; // Inicializar con el usuario actual

  constructor(private route: ActivatedRoute, private router: Router, private causalService: CausalService, private authService: AuthService) { }

  ngOnInit(): void {
    //this.usuarioActual = this.authService.getUsuarioActual(); // Obtener el usuario actual

    const idCausal = Number(this.route.snapshot.paramMap.get('id'));
    const causal = this.causalService.obtenerCausalPorId(idCausal);
    if (causal) {
      this.causal = causal;
    } else {
      // Manejo si no se encuentra la causal
      console.error(`No se encontró ninguna causal con el ID ${idCausal}`);
      // Redireccionar a una página de error o a la lista de causales
      this.router.navigate(['/lista-causales']);
    }
  }

  guardarCambios() {
    // Actualizar el campo 'creador' con el usuario actual
    this.causal.creador = this.usuarioActual;
    // Llamar al método de editar causal del servicio
    if (this.causal) {
      this.causalService.editarCausal(this.causal);
      // Redireccionar a la página de lista de causales después de guardar los cambios
      this.router.navigate(['/causales-despido']);
    }
  }
}
