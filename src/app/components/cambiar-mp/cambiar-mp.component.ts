import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cambiar-mp',
  templateUrl: './cambiar-mp.component.html',
  styleUrls: ['./cambiar-mp.component.css']
})
export class CambiarMPComponent {
  constructor(private router: Router) { }

  redirectToRoute() {
    // Redirige a la ruta deseada cuando se hace clic en el elemento
    this.router.navigateByUrl('/visa');
  }

}
