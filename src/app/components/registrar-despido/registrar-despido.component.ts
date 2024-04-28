import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/shared/model/Entities/empleado';
import { CausalService } from 'src/app/shared/model/causal.service';
import { EmpleadoService } from 'src/app/shared/model/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-despido',
  templateUrl: './registrar-despido.component.html',
  styleUrl: './registrar-despido.component.css'
})
export class RegistrarDespidoComponent implements OnInit {
  empleados: Empleado[] = [];
  causales: string[] = [];
  selectedEmpleado!: Empleado;
  selectedCausal!: string;


  constructor(private empleadoService: EmpleadoService, private causalService: CausalService, private router: Router) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados(); // Asegúrate de tener un método que obtenga solo los empleados activos
    this.causales = this.causalService.obtenerCausales().map(causal => causal.causal);
  }

  onSubmit(): void {
    // Lógica para registrar el nuevo proceso de despido
    const newId = this.empleadoService.getEmpleados().length + 1;
    const newEmpleado: Empleado = {
      id: newId,
      nombre: this.selectedEmpleado.nombre,
      status: 'Notificación', // La etapa inicial es siempre 'Notificación'
      causal: this.selectedCausal,
      progreso: 25, // El progreso inicial es siempre 25%
      // ... más propiedades según sea necesario
    };
    this.empleadoService.addEmpleado(newEmpleado);
    this.router.navigate(['/progreso-salida']);
  }

  onDiscard(): void {
    this.router.navigate(['/progreso-salida']); // Navega de vuelta sin realizar ninguna acción
  }
}
