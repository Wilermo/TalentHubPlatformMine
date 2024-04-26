import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/model/sidebar.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  nombreEmpresa: string= '';
  modulos: { icono: string, nombre: string }[] = [];
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    const hamBurger = document.querySelector(".toggle-btn") as HTMLElement;

    hamBurger.addEventListener("click", () => {
      const sidebar = document.querySelector("#sidebar") as HTMLElement;
      
      sidebar.classList.toggle("expand");
    });
    // Obtener el nombre de la empresa
    this.sidebarService.obtenerNombreEmpresa().subscribe(
      (nombre: string) => {
        this.nombreEmpresa = nombre;
      },
      (error) => {
        console.error('Error al obtener el nombre de la empresa:', error);
      }
    );

    // Obtener los módulos
    this.sidebarService.obtenerModulos().subscribe(
      (modulos: any[]) => {
        this.modulos = modulos;
      },
      (error) => {
        console.error('Error al obtener los módulos:', error);
      }
    );
  }
}
