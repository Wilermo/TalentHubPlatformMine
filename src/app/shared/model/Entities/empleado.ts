export class Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public status: string,
    public causal: string,
    public progreso: number,
    public salario: number,
    public razonDespido?: string,
    public documentos: any[] = [],  // Inicializado como un arreglo vacío por defecto
    public nombrePersonaCargo?: string
  ) { }
}

/*
export class Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public status: string,
    public causal: string,
    public progreso: number,
    public salario: number,
    public contrato_id: number,
    public nombrePersonaCargo?: string
  ) { }
}
*/