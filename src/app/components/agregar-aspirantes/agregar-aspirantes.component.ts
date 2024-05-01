import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/model/service/candidate.service';
import { candidate } from 'src/app/shared/model/Entities/candidate';
import { offerService } from 'src/app/shared/model/service/offer.service';
import { offer } from 'src/app/shared/model/Entities/offer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-aspirantes',
  templateUrl: './agregar-aspirantes.component.html',
  styleUrls: ['./agregar-aspirantes.component.css']
})
export class AgregarAspirantesComponent {
  estados = ['Inicial'];
  ofertas: offer[] = [];

  constructor(
    private builder: FormBuilder,
    private aspiranteService: CandidateService,
    private convocatoriaService: offerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.customerform.setValue({
      firstname: 'MeVale',
      surname: 'Monda',
      phoneNumber: 'aaaaaaa@gmail.com',
      offer: '', // No necesitamos establecer un valor aquí
      status: 'Inicial',
    });
    this.loadOfertas();
  }

  customerform = this.builder.group({
    firstname: ['', Validators.required],
    surname: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    offer: ['', Validators.required],
    status: ['', Validators.required],
  });

  SaveCustomer() {
    if (this.customerform.valid) {
      console.log('Valor de offer antes de convertir a número:', this.customerform.value.offer);
      const offerId = Number(this.customerform.value.offer);
      console.log('Valor de offer después de convertir a número:', offerId);
  
      const aspiranteData: candidate = {
        name: this.customerform.value.firstname || '',
        surname: this.customerform.value.surname || '',
        phoneNumber: this.customerform.value.phoneNumber || '',
        offer_id: offerId || 0,
        status: this.customerform.value.status || '',
      };
  
      console.log('Datos del aspirante:', aspiranteData); // Para verificar que los datos sean correctos
  
      this.aspiranteService.agregarCandidate(aspiranteData).subscribe(
        response => {
          console.log('Aspirante agregado correctamente:', response);
          this.showSuccessMessage();
        },
        error => {
          console.error('Error al agregar aspirante:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
  

  clearform() {
    this.customerform.reset();
  }

  loadOfertas(): void {
    this.convocatoriaService.getoffers().subscribe(
      (convocatorias: offer[]) => {
        this.ofertas = convocatorias;
      },
      error => {
        console.error('Error al cargar las ofertas:', error);
      }
    );
  }

  showSuccessMessage() {
    this.snackBar.open('La convocatoria se agregó con éxito', 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
