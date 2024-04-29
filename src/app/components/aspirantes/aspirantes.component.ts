import { Component, AfterViewInit, ViewChild, NgModule } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AspiranteService } from 'src/app/shared/model/service/aspirante.service';
import { aspirante } from 'src/app/shared/model/Entities/aspirante';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { DetallesAspiranteComponent } from '../detalles-aspirante/detalles-aspirante.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarAspiranteComponent } from '../editar-aspirante/editar-aspirante.component';
import { ComunicacionAspService } from 'src/app/shared/model/service/comunicacion-asp.service';

@Component({
  selector: 'app-aspirantes',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, FormsModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './aspirantes.component.html',
  styleUrl: './aspirantes.component.css',
})
export class AspirantesComponent implements AfterViewInit {
  nombreFilterValue: string = '';
  apiResponse: any = [];
  statusFilterValue: string = ''; // Agrega una variable para almacenar el valor del filtro de status
  constructor(private router: Router, private _liveAnnouncer: LiveAnnouncer, 
    private aspiranteService: AspiranteService, private dialog: MatDialog,private snackBar: MatSnackBar,private aspiranteEditService:ComunicacionAspService) { }
  displayedColumns: string[] = ['identification', 'firstname', 'email', 'offer', 'status', 'action'];
  dataSource = new MatTableDataSource<aspirante>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.aspiranteService.getAspirantes().subscribe((response: any) => {
      this.apiResponse = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.aspiranteEditService.onAspiranteEdit().subscribe(() => {
      // Actualiza los datos de la tabla
      this.refreshTableData();
    });
  }

  refreshTableData() {
    this.aspiranteService.getAspirantes().subscribe((response: any) => {
      this.apiResponse = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  announceSortChange(sortState: Sort) {
    if (sortState.active) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter() {
    this.dataSource.filter = this.nombreFilterValue.trim().toLowerCase();
  }
  onChange($event: any) {
    if ($event.value === "") {
      // Si se selecciona "Todos", mostrar todos los datos
      this.dataSource = new MatTableDataSource(this.apiResponse);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      // Filtrar según la selección
      let filteredData = _.filter(this.apiResponse, (item) => {
        return item.status === $event.value;
      });
      this.dataSource = new MatTableDataSource(filteredData);
    }
  }
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  edit(element: aspirante) {
    const index = this.apiResponse.findIndex((item: aspirante) => item === element);
    if (index !== -1) {
      this.apiResponse[index].status = 'Rechazado';
      if (element.id !== undefined) {
        this.aspiranteService.editAspirante(element.id, 'Rechazado').subscribe(
          response => {
            console.log('Aspirante editado con éxito');
            this.showSuccessMessage();
          },
          error => {
            console.error('Error al editar aspirante:', error);
            this.apiResponse[index].status = element.status;
          }
        );
      } else {
        console.error('El ID del aspirante es undefined');
      }
      this.dataSource = new MatTableDataSource(this.apiResponse);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  showSuccessMessage() {
    this.snackBar.open('El estado se cambió a Rechazado con éxito', 'Cerrar', {
      duration: 3000, 
      verticalPosition: 'top' 
    });
  }
  

  routAgregar() {
    this.router.navigate(['/agregar-aspirante']);
  }

  Openpopup(aspirante: aspirante) {
    const dialogRef = this.dialog.open(DetallesAspiranteComponent, {

      data: { aspirante: aspirante } // Pasa el objeto aspirante al popup
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup cerrado');
    });
  }
  editpopup(aspirante: aspirante) {
    console.log('Datos del aspirante:', aspirante);
    const dialogRef = this.dialog.open(EditarAspiranteComponent, {
      data: { aspirante: aspirante } // Pasa el objeto aspirante al popup
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup cerrado');
      // Aquí puedes manejar cualquier lógica después de cerrar el diálogo, si es necesario
    });
  }
}



