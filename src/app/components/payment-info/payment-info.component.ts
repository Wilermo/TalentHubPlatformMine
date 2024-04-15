import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.css'
})
export class PaymentInfoComponent {

  constructor(private router: Router) { }
  registerCoupon() {
    this.router.navigate(['/cupon']);
  }
  placeCard() {
    this.router.navigate(['/cambiar-mp']);
  }
}
