import { Component, AfterViewInit, ViewChild, NgModule } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConvocatoriaService } from 'src/app/shared/model/convocatoria.service';
import { convocatoria } from 'src/app/shared/model/Entities/convocatoria';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { DetallesConvocatoriaComponent } from '../detalles-convocatoria/detalles-convocatoria.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarConvocatoriaComponent } from '../editar-convocatoria/editar-convocatoria.component';
import { ComunicacionAspService } from 'src/app/shared/model/comunicacion-asp.service';

@Component({
  selector: 'app-convocatoria',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, FormsModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './convocatoria.component.html',
  styleUrl: './convocatoria.component.css'
})
export class ConvocatoriaComponent implements AfterViewInit {
  nombreFilterValue: string = '';
  apiResponse: any = [];
  statusFilterValue: string = ''; // Agrega una variable para almacenar el valor del filtro de status
  constructor(private router: Router, private _liveAnnouncer: LiveAnnouncer, 
    private convocatoriaService: ConvocatoriaService, private dialog: MatDialog,private snackBar: MatSnackBar,private aspiranteEditService:ComunicacionAspService) { }
  displayedColumns: string[] = ['tittleOffer', 'publishDate', 'experience', 'status', 'action'];
  dataSource = new MatTableDataSource<convocatoria>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.convocatoriaService.getConvocatorias().subscribe((response: any) => {
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
    this.convocatoriaService.getConvocatorias().subscribe((response: any) => {
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

  edit(element: convocatoria) {
    const index = this.apiResponse.findIndex((item: convocatoria) => item === element);
    if (index !== -1) {
      this.apiResponse[index].status = 'Cerrada';
      if (element.id !== undefined) {
        this.convocatoriaService.editConvocatoria(element.id, 'Cerrada').subscribe(
          response => {
            console.log('Convocatoria editado con éxito');
            this.showSuccessMessage();
          },
          error => {
            console.error('Error al editar aspirante:', error);
            this.apiResponse[index].status = element.status;
          }
        );
      } else {
        console.error('El ID de la convocatoria es undefined');
      }
      this.dataSource = new MatTableDataSource(this.apiResponse);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  showSuccessMessage() {
    this.snackBar.open('El estado se cambió a Cerrado con éxito', 'Cerrar', {
      duration: 3000, 
      verticalPosition: 'top' 
    });
  }
  

  routAgregar() {
    this.router.navigate(['/agregar-convocatoria']);
  }

  Openpopup(convocatoria: convocatoria) {
    const dialogRef = this.dialog.open(DetallesConvocatoriaComponent, {

      data: { convocatoria: convocatoria } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup cerrado');
    });
  }
  editpopup(convocatoria: convocatoria) {
    console.log('Datos de la convocatoria:', convocatoria);
    const dialogRef = this.dialog.open(EditarConvocatoriaComponent, {
      data: { aspirante: convocatoria } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup cerrado');
    });
  }
}




