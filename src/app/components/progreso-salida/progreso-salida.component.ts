import { Component } from '@angular/core';
import { Empleado } from 'src/app/shared/model/Entities/empleado';

@Component({
  selector: 'app-progreso-salida',
  templateUrl: './progreso-salida.component.html',
  styleUrl: './progreso-salida.component.css'
})
export class ProgresoSalidaComponent {
  empleados: Empleado[] = [
    { id: 1, nombre: 'Juan Pérez', status: 'Notificación', causal: 'Reducción de personal', progreso: 25 },
    { id: 2, nombre: 'Ana Gómez', status: 'Documentación', causal: 'Desempeño insuficiente', progreso: 50 },
    { id: 3, nombre: 'Luis Ramos', status: 'Liquidación', causal: 'Cierre de departamento', progreso: 75 },
    { id: 4, nombre: 'Sofía Castillo', status: 'Finalizado', causal: 'Mutuo acuerdo', progreso: 100 }
  ];

  filteredEmpleados: Empleado[] = [];

  filtroNombre: string = '';
  filtroEtapa: string = '';
  filtroCausal: string = '';

  constructor() { }

  ngOnInit(): void {
    this.filteredEmpleados = this.empleados; // Inicialmente, todos los empleados son visibles
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredEmpleados = this.empleados.filter(empleado => {
      return (this.filtroNombre ? empleado.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) : true)
        && (this.filtroEtapa ? empleado.status === this.filtroEtapa : true)
        && (this.filtroCausal ? empleado.causal === this.filtroCausal : true);
    });
  }

  onFiltroNombreChange(value: string): void {
    this.filtroNombre = value;
    this.applyFilters();
  }

  onFiltroEtapaChange(value: string): void {
    this.filtroEtapa = value;
    this.applyFilters();
  }

  onFiltroCausalChange(value: string): void {
    this.filtroCausal = value;
    this.applyFilters();
  }

  getProgressWidth(status: string): string {
    switch (status) {
        case 'Notificación':
            return '25%';
        case 'Documentación':
            return '50%';
        case 'Liquidación':
            return '75%';
        case 'Finalizado':
            return '100%';
        default:
            return '0%';
    }
}

getProgressColor(status: string): string {
    switch (status) {
        case 'Notificación':
            return 'bg-info';
        case 'Documentación':
            return 'bg-warning';
        case 'Liquidación':
            return 'bg-success';
        case 'Finalizado':
            return 'bg-primary'; // o la clase de color personalizada si no deseas usar 'bg-primary'
        default:
            return '';
    }
}

getProgressValue(status: string): string {
    switch (status) {
        case 'Notificación':
            return '25%';
        case 'Documentación':
            return '50%';
        case 'Liquidación':
            return '75%';
        case 'Finalizado':
            return 'Finalizado';
        default:
            return '';
    }
}
}

