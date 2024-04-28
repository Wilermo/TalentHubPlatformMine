import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConvocatoriaService } from 'src/app/shared/model/convocatoria.service';
import { convocatoria } from 'src/app/shared/model/Entities/convocatoria';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-convocatoria',
  templateUrl: './agregar-convocatoria.component.html',
  styleUrl: './agregar-convocatoria.component.css'
})
export class AgregarConvocatoriaComponent {
  estados = ['Abierta', 'Progreso', 'Cerrada'];
  constructor(private builder: FormBuilder, private convocatoriaService: ConvocatoriaService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.convocatoriaform.setValue({
      tittleOffer: '', 
      description: 'MeVale mondaaaaa',
      experience: 'Monda',
      publishDate: new Date(),
      requirements: 'sistemas',
      status: 'Abierta',
    });
  }
    convocatoriaform = this.builder.group({
    tittleOffer: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    experience: this.builder.control('', Validators.required),
    publishDate: [new Date(), Validators.required],
    requirements: this.builder.control('', Validators.required),
    status: this.builder.control('', Validators.required),
  });

  SaveConvocatoria() {
    console.log('Convocatoria',this.convocatoriaform);
    if (this.convocatoriaform.valid) {
      const convocatoriaData: convocatoria = {
        tittleOffer: this.convocatoriaform.value.tittleOffer|| '', 
        description: this.convocatoriaform.value.description || '',
        experience:  this.convocatoriaform.value.experience || '',
        publishDate: new Date(),
        requirements: this.convocatoriaform.value.requirements || '',
        status: this.convocatoriaform.value.status || '',
      };
      this.convocatoriaService.agregarConvocatoria(convocatoriaData).subscribe(
        response => {
          console.log('Convocatoria agregado correctamente:', response);
          this.showSuccessMessage();
          this.clearform();
        },
        error => {
          
          console.error('Error al agregar convocatoria:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
  clearform() {
    this.convocatoriaform.reset();
  }
  showSuccessMessage() {
    this.snackBar.open('La convocatoria se agregó con éxito', 'Cerrar', {
      duration: 3000, 
      verticalPosition: 'top' 
    });
  }
}
