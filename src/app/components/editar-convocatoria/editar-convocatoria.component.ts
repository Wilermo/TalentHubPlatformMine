import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConvocatoriaService } from 'src/app/shared/model/convocatoria.service';
import { BehaviorSubject } from 'rxjs';
import { ComunicacionAspService } from 'src/app/shared/model/comunicacion-asp.service';


@Component({
  selector: 'app-editar-convocatoria',
  templateUrl: './editar-convocatoria.component.html',
  styleUrl: './editar-convocatoria.component.css'
})
export class EditarConvocatoriaComponent {
  estados = ['Abierta', 'Progreso', 'Cerrada'];
  inputdata: any;
  currentConvocatoria: any;
  editForm!: FormGroup;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditarConvocatoriaComponent>, private formBuilder: FormBuilder,
    private service: ConvocatoriaService, private aspiranteEditService:ComunicacionAspService) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    console.log('Datos de la convocatoria:', this.inputdata);
    this.editForm = this.formBuilder.group({
      tittleOffer: [''], 
      description: [''],
      status: [''],
      requirements: [''],
      experience: ['']
    });
    this.currentConvocatoria = { ...this.inputdata.convocatoria }; 
    
  }


  closepopup() {
    this.ref.close('Closed using function');
  }


  editAspirante() {
    console.log('Datos2 de la convocatoria:', this.inputdata);
    if (this.inputdata) {
      console.log('id:', this.inputdata);
      const id = this.inputdata.aspirante.id;

      
      const newStatus = this.editForm.get('status')?.value || this.currentConvocatoria.status;
      const newtittleOffer = this.editForm.get('tittleOffer')?.value || this.currentConvocatoria.tittleOffer;
      const newDespcription = this.editForm.get('description')?.value || this.currentConvocatoria.description;
      const newRequirements = this.editForm.get('requirements')?.value || this.currentConvocatoria.requirements;
      console.log('id:', newStatus);
    
      this.service.editConvocatoria1(id, newStatus, newtittleOffer, newDespcription, newRequirements).subscribe(
        () => {
          console.log('convocatoria editado exitosamente');
          this.ref.close('convocatoria editado exitosamente');
    
          this.aspiranteEditService.notifyAspiranteEdit();
          
        },
        error => {
          console.error('Error al editar aspirante:', error);
        }
      );
    } else {
      console.error('inputdata es nulo');
      
    }
  }

}
