export interface contrato {
    id?: number; 
    salary?: number;
    fechaInicio: Date;
    tipoContrato: string;  //Debería ser un enum
    fechaFinalizacion: Date;
    cargo: string;
    aspirante_id: string;
    eps: string;
    nameEmergencyContacts: string;
    emergencyContact: string;
}