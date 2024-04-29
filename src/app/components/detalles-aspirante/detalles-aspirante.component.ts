import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AspiranteService } from 'src/app/shared/model/service/aspirante.service'; // Importa el servicio de aspirante si no lo has hecho aún
import { aspirante } from 'src/app/shared/model/Entities/aspirante'; // Importa el modelo de aspirante si no lo has hecho aún

@Component({
  selector: 'app-detalles-aspirante',
  templateUrl: './detalles-aspirante.component.html',
  styleUrls: ['./detalles-aspirante.component.css']
})
export class DetallesAspiranteComponent implements OnInit {
  aspirante: aspirante | null = null;
  aspiranteId: number | null = null;

  constructor(private route: ActivatedRoute, private aspiranteService: AspiranteService,
    @Inject(MAT_DIALOG_DATA) public data: { aspirante: aspirante }, private ref:MatDialogRef<DetallesAspiranteComponent>) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.aspiranteId = +idParam;
      console.log('ID del aspirante:', this.aspiranteId);
      this.obtenerDetallesAspirante(this.aspiranteId);
    } else {
      console.error('El ID del aspirante es null');
    }
  }

  obtenerDetallesAspirante(id: number): void {
    this.aspiranteService.getAspirante(id).subscribe(
      (aspirante: aspirante) => {
        this.aspirante = aspirante;
        console.log('Detalles del aspirante:', this.aspirante);
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
