import { Injectable } from '@angular/core';
import { Causal } from '../Entities/causal';
@Injectable({
  providedIn: 'root'
})
export class CausalService {
  private causales: Causal[] = [
    new Causal(1, 'Reducción de personal', 'Despido por reducción de la fuerza laboral debido a condiciones económicas.', 'Admin'),
    new Causal(2, 'Desempeño insuficiente', 'Despido por no cumplir con los objetivos de rendimiento establecidos.', 'Admin'),
    new Causal(3, 'Cierre de departamento', 'Despido debido al cierre del departamento operativo.', 'Admin'),
    new Causal(4, 'Mutuo acuerdo', 'Terminación de contrato por acuerdo mutuo entre el empleado y la empresa.', 'Admin'),
    new Causal(5, 'Falta de habilidades', 'Despido por no poseer las habilidades técnicas necesarias para el puesto.', 'Admin')
  ];

  constructor() { }

  agregarCausal(nuevaCausal: Causal) {
    this.causales.push(nuevaCausal);
  }

  obtenerCausales(): Causal[] {
    return this.causales;
  }

  obtenerCausalPorId(id: number): Causal | undefined {
    return this.causales.find(causal => causal.id === id);
  }

  editarCausal(causalEditada: Causal) {
    const index = this.causales.findIndex(c => c.id === causalEditada.id);
    if (index !== -1) {
      this.causales[index] = causalEditada;
    }
  }

  eliminarCausal(idCausal: number) {
    const index = this.causales.findIndex(c => c.id === idCausal);
    if (index !== -1) {
      this.causales.splice(index, 1);
    }
  }
}
