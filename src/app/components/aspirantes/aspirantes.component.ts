import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CandidateService } from 'src/app/shared/model/service/candidate.service';
import { candidate } from 'src/app/shared/model/Entities/candidate';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { DetallesAspiranteComponent } from '../detalles-aspirante/detalles-aspirante.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarAspiranteComponent } from '../editar-aspirante/editar-aspirante.component';
import { ComunicacionAspService } from 'src/app/shared/model/service/comunicacion-asp.service';
import { offerService } from 'src/app/shared/model/service/offer.service';
import { offer } from 'src/app/shared/model/Entities/offer';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrl: './aspirantes.component.css',
})
export class AspirantesComponent implements AfterViewInit {
  nombreFilterValue: string = '';
  apiResponse: any = [];
  offersMap: Map<number, string> = new Map<number, string>();
  statusFilterValue: string = '';
  constructor(private router: Router, private _liveAnnouncer: LiveAnnouncer,
    private aspiranteService: CandidateService, private dialog: MatDialog,
    private snackBar: MatSnackBar, private aspiranteEditService: ComunicacionAspService,
    private offerService: offerService) { }
  displayedColumns: string[] = ['name', 'surname', 'phoneNumber', 'offer', 'status', 'action'];
  dataSource = new MatTableDataSource<candidate>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.aspiranteService.getCandidates().subscribe((response: any) => {
      this.apiResponse = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loadOfferTitles();
    })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.aspiranteEditService.onAspiranteEdit().subscribe(() => {
      this.refreshTableData();
    });
  }

  refreshTableData() {
    this.aspiranteService.getCandidates().subscribe((response: any) => {
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
  loadOfferTitles() {
    this.apiResponse.forEach((candidate: candidate) => {
      this.offerService.getoffer(candidate.offer_id).subscribe((offer: offer) => {
        this.offersMap.set(candidate.offer_id, offer.tittleOffer); 
      });
    });
  }

  getOfferTitle(offerId: number): string {
    return this.offersMap.get(offerId) || ''; // Return offer title from map
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

  edit(element: candidate) {
    const index = this.apiResponse.findIndex((item: candidate) => item === element);
    if (index !== -1) {
      this.apiResponse[index].status = 'Rechazado';
      if (element.id !== undefined) {
        this.aspiranteService.editCandidate(element.id, 'Rechazado').subscribe(
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

  Openpopup(aspirante: candidate) {
    const dialogRef = this.dialog.open(DetallesAspiranteComponent, {

      data: { aspirante: aspirante } // Pasa el objeto aspirante al popup
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup cerrado');
    });
  }
  editpopup(aspirante: candidate) {
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



