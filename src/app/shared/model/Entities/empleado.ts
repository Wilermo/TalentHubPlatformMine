export class Empleado {
    constructor(
      public id: number,
      public nombre: string,
      public status: string,
      public causal: string,
      public progreso: number,
      public razonDespido?: string,
      public documentos?: any[],
      public nombrePersonaCargo?: string
    ) {}
  }