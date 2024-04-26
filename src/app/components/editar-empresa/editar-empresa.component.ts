import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-empresa',

  templateUrl: './editar-empresa.component.html',
  styleUrl: './editar-empresa.component.css'
})
export class EditarEmpresaComponent implements OnInit {
  editForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializar el FormGroup utilizando FormBuilder.
    this.editForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', Validators.required],
      industry: ['', Validators.required],
      website: ['', Validators.pattern('https?://.+')]
    });

    // Simular la carga de datos existentes.
    this.loadData();
  }

  loadData() {
    const existingData = {
      companyName: 'Ejemplo S.A.',
      location: 'Madrid',
      industry: 'Tecnología',
      website: 'http://www.ejemplo.com'
    };
    this.editForm.patchValue(existingData);
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.isLoading = true;
      console.log('Datos enviados:', this.editForm.value);
      setTimeout(() => {
        this.isLoading = false;
        alert('Datos actualizados exitosamente!');
      }, 2000);  // Simula una respuesta de actualización exitosa
    } else {
      console.error('El formulario no es válido');
    }
  }
}
