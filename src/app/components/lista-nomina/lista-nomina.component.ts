import { Component } from '@angular/core';
import { Empleado } from 'src/app/shared/model/Entities/empleado';
import { EmpleadoService } from 'src/app/shared/model/service/empleado.service';

@Component({
  selector: 'app-lista-nomina',
  templateUrl: './lista-nomina.component.html',
  styleUrls: ['./lista-nomina.component.css']
})
export class ListaNominaComponent {
  empleados: Empleado[] = [];
  totalLiquidacion: number = 0;
  mesActual!: string;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleados = this.empleadoService.getEmpleados();
    this.calcularTotalLiquidacion();
    this.obtenerMesActual();
  }

  calcularTotalLiquidacion() {
    this.totalLiquidacion = this.empleados.reduce((acc, empleado) => acc + empleado.salario, 0);
  }

  agregarNovedad(id: number) {
    // Lógica para agregar novedad
  }

  eliminarEmpleado(id: number) {
    this.empleadoService.deleteEmpleadoById(id);
    this.empleados = this.empleadoService.getEmpleados(); // Actualizar lista
    this.calcularTotalLiquidacion(); // Recalcular el total
  }

  obtenerMesActual() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fechaActual = new Date();
    this.mesActual = meses[fechaActual.getMonth()];
  }

}
