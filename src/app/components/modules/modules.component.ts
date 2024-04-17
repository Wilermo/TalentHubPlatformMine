import { Component } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  rol = localStorage.getItem('role');
  showAllCards: boolean = this.rol === 'ADMIN, default-roles-talentsoft';

  // Establecer cada tarjeta para que se muestre si el usuario es ADMIN o tiene el rol específico.
  showRecruitmentCard: boolean = this.showAllCards || this.rol === 'RECLUTAMIENTO, default-roles-talentsoft';
  showDespidoCard: boolean = this.showAllCards || this.rol === 'DESPIDO, default-roles-talentsoft';
  showSSTCard: boolean = this.showAllCards || this.rol === 'SST, default-roles-talentsoft';
  showBICard: boolean = this.showAllCards || this.rol === 'BI, default-roles-talentsoft';
  showNominaCard: boolean = this.showAllCards || this.rol === 'NOMINA_ELECTRONICA, default-roles-talentsoft';

}
