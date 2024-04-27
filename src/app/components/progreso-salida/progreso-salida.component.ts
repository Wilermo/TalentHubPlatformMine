import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/model/empleado.service';
import { Empleado } from 'src/app/shared/model/Entities/empleado';

@Component({
  selector: 'app-progreso-salida',
  templateUrl: './progreso-salida.component.html',
  styleUrls: ['./progreso-salida.component.css']
})
export class ProgresoSalidaComponent implements OnInit {
  empleados: Empleado[] = [];
  filteredEmpleados: Empleado[] = [];

  filtroNombre: string = '';
  filtroEtapa: string = '';
  filtroCausal: string = '';

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();
    this.filteredEmpleados = this.empleados; // Inicialmente, todos los empleados son visibles
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredEmpleados = this.empleadoService.filterEmpleados(this.filtroNombre, this.filtroEtapa, this.filtroCausal);
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
    return this.empleadoService.getProgressWidth(status);
  }

  getProgressColor(status: string): string {
    return this.empleadoService.getProgressColor(status);
  }

  getProgressValue(status: string): string {
    return this.empleadoService.getProgressValue(status);
  }
}