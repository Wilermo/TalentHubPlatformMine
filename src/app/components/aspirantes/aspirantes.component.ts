import { Component, OnInit, ViewChild } from '@angular/core';
import { aspirante } from 'src/app/shared/model/Entities/aspirante';
import { AspiranteService } from 'src/app/shared/model/aspirante.service';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrl: './aspirantes.component.css'
})
export class AspirantesComponent {

  constructor(private aspirantesService:AspiranteService){}
  currentPage: number = 1;
  pageSize: number = 5;
  aspirantes: Array<aspirante> = [];
  filteredaspirante: Array<aspirante> = this.aspirantes;
  pageSizes: Array<number> = [5, 10, 20];

  ngOnInit() {
    this.getAspirantes();
    this.visibleData();
    this.pageNumbers();
  }

  getAspirantes(){
    this.aspirantesService.getAspirantes().subscribe(
      (data: aspirante[]) => {
        this.aspirantes = data;
        this.filteredaspirante = this.aspirantes;
      },
      error => {
        console.error('Error al obtener los aspirantes:', error);
      }
    );
  }
  visibleData() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredaspirante.slice(startIndex, endIndex);
  }
  nextPage() {
    this.currentPage++;
    this.visibleData();
  }
  previousPage() {
    this.currentPage--;
    this.visibleData();
  }
  pageNumbers() {
    let totalPages = Math.ceil(this.filteredaspirante.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }
  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleData();
  }

  filterData(searchTerm: string) {
    this.filteredaspirante = this.aspirantes.filter(item => {
      return Object.values(item).some(val =>
        val.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    this.visibleData();
  }

  changePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.visibleData();
  }
}


