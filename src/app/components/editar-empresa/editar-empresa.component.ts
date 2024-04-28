import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/shared/model/empresa.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  editForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private empresaService: EmpresaService) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      representative: ['', Validators.required],
      employeesNumber: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      website: [''],
    });

    this.loadData();
  }

  loadData() {
    // Aquí, podrías llamar a un método del servicio para obtener los datos.
    const existingData = this.empresaService.getEmpresaInfo();
    this.editForm.patchValue(existingData);
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.isLoading = true;
      this.empresaService.updateEmpresaInfo(this.editForm.value).then(() => {
        this.isLoading = false;
        alert('Datos actualizados exitosamente!');
      });
    } else {
      console.error('El formulario no es válido');
    }
  }

}
