import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
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
