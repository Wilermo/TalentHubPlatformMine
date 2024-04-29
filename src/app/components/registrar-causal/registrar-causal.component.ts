// registrar-causal.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Causal } from 'src/app/shared/model/Entities/causal';
import { CausalService } from 'src/app/shared/model/service/causal.service';  // Asumiendo que la ruta es correcta

@Component({
  selector: 'app-registrar-causal',
  templateUrl: './registrar-causal.component.html',
  styleUrls: ['./registrar-causal.component.css']
})
export class RegistrarCausalComponent {
  nuevaCausal: Causal = {
    id: 0,  // Inicializado con un valor temporal; asumimos que el id se genera automáticamente o se ajustará posteriormente
    causal: '',
    descripcion: '',
    creador: 'Usuario actual'  // Suponiendo que el creador es el usuario actualmente autenticado
  };

  constructor(private causalService: CausalService, private router: Router) { }

  guardarCausal(): void {
    if (this.nuevaCausal.causal && this.nuevaCausal.descripcion) {
      this.causalService.agregarCausal({ ...this.nuevaCausal });  // Usa spread para evitar mutaciones directas si es necesario
      this.router.navigate(['/causales-despido']);
    } else {
      alert('Por favor, complete todos los campos necesarios.');
    }
  }

  descartar(): void {
    this.router.navigate(['/causales-despido']);  // Navegar de vuelta a la lista de causales sin guardar cambios
  }
}
