// src/app/shared/model/causal.ts
export class Causal {
    constructor(
        public id: number,
        public causal: string,
        public descripcion: string,
        public creador?: string  // El creador es opcional
    ) { }
}
