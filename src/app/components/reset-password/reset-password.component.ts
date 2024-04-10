import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.email) {
      // Send Credentials
      this.http.post<any>('URL_DEL_BACKEND/login', { email: this.email })
        .subscribe(
          response => {
            // Manage the answer
            console.log('answer backend:', response);
          },
          error => {
            // Error
            console.error('Error sending credentials:', error);
          }
        );
    }
  }
}
