import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private empresaInfo: any = {
    companyName: 'Ejemplo S.A.',
    representative: 'Juan Pérez',
    employeesNumber: '150',
    phone: '+34 123 456 789',
    email: 'contacto@ejemplo.com',
    location: 'Calle 84 #25E-9D',
    website: 'pepitoestuvoaqui@ejemplo.com',
  };

  constructor() { }

  getEmpresaInfo() {
    // Aquí podrías realizar una solicitud HTTP para obtener la información
    // Por ahora, simplemente devolvemos la información ficticia
    return this.empresaInfo;
  }

  updateEmpresaInfo(data: any): Promise<void> {
    // Aquí realizarías la actualización del backend
    // Por ahora, solo actualizamos la información local
    return new Promise(resolve => {
      setTimeout(() => {
        this.empresaInfo = data;
        resolve();
      }, 2000);
    });
  }
}
