import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AspiranteService } from 'src/app/shared/model/aspirante.service';
import { aspirante } from 'src/app/shared/model/Entities/aspirante';

@Component({
  selector: 'app-agregar-aspirantes',
  templateUrl: './agregar-aspirantes.component.html',
  styleUrls: ['./agregar-aspirantes.component.css']
})
export class AgregarAspirantesComponent {
  estados = ['Inicial'];
  ofertas = ['Sistemas', 'Marketing', 'Industrial', 'Civil'];

  constructor(private builder: FormBuilder, private aspiranteService: AspiranteService) {}

  ngOnInit(): void {
    this.customerform.setValue({
      identification: '', 
      firstname: 'MeVale',
      surname: 'Monda',
      email: 'aaaaaaa@gmail.com',
      university: 'Jave',
      offer: 'sistemas',
      status: 'Inicial',
      emergencyContact: 'add1',
      nameEmergencyContact: 'add1'
    });
  }

  customerform = this.builder.group({
    identification: this.builder.control('', Validators.required),
    firstname: this.builder.control('', Validators.required),
    surname: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    university: this.builder.control('', Validators.required),
    offer: this.builder.control('', Validators.required),
    status: this.builder.control('', Validators.required),
    emergencyContact: this.builder.control('', Validators.required),
    nameEmergencyContact: this.builder.control('', Validators.required),
  });

  SaveCustomer() {
    if (this.customerform.valid) {
      const aspiranteData: aspirante = {
        identification: this.customerform.value.identification || '', 
        firstname: this.customerform.value.firstname || '',
        surname: this.customerform.value.surname || '',
        email: this.customerform.value.email || '',
        university: this.customerform.value.university || '',
        offer: this.customerform.value.offer || '',
        status: this.customerform.value.status || '',
        emergencyContact: this.customerform.value.emergencyContact || '',
        nameEmergencyContact: this.customerform.value.nameEmergencyContact || '',
      };
      this.aspiranteService.agregarAspirante(aspiranteData).subscribe(
        response => {
          console.log('Aspirante agregado correctamente:', response);
          this.clearform();
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
}
