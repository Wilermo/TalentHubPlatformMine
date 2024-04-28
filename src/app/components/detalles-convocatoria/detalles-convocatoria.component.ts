import { Component , Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConvocatoriaService } from 'src/app/shared/model/convocatoria.service'; // Importa el servicio de aspirante si no lo has hecho aún
import { convocatoria } from 'src/app/shared/model/Entities/convocatoria';

@Component({
  selector: 'app-detalles-convocatoria',
  templateUrl: './detalles-convocatoria.component.html',
  styleUrl: './detalles-convocatoria.component.css'
})
export class DetallesConvocatoriaComponent implements OnInit {
  convocatoria: convocatoria| null = null;
  convocatoriaId: number | null = null;

  constructor(private route: ActivatedRoute, private convocatoriaService: ConvocatoriaService,
    @Inject(MAT_DIALOG_DATA) public data: { convocatoria: convocatoria }, private ref:MatDialogRef<DetallesConvocatoriaComponent>) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.convocatoriaId = +idParam;
      console.log('ID de la convocatoria:', this.convocatoriaId);
      this.obtenerDetallesAspirante(this.convocatoriaId);
    } else {
      console.error('El ID de la convocatoria es null');
    }
  }

  obtenerDetallesAspirante(id: number): void {
    this.convocatoriaService.getConvocatoria(id).subscribe(
      (convocatoria: convocatoria) => {
        this.convocatoria = convocatoria;
        console.log('Detalles de la convocatoria:', this.convocatoria);
        // Aquí puedes manejar los detalles del aspirante
      },
      error => {
        console.error('Error al obtener detalles del aspirante:', error);
      }
    );
  }
  closePopup(){
    this.ref.close();
  }
}

