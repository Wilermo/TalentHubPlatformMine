import { Component } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  rol = localStorage.getItem('role');
  showRecruitmentCard: boolean = this.rol === 'RECLUTAMIENTO, default-roles-talentsoft';
  showDespidoCard: boolean = this.rol === 'DESPIDO, default-roles-talentsoft';
  showSSTCard: boolean = this.rol === 'SST, default-roles-talentsoft';
  showBICard: boolean = this.rol === 'BI, default-roles-talentsoft';
  showNominaCard: boolean = this.rol === 'NOMINA_ELECTRONICA, default-roles-talentsoft';

}
