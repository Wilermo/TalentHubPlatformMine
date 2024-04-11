import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompanyComponent } from './components/company/company.component';
import { UsersComponent } from './components/users/users.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ModulesComponent } from './components/modules/modules.component';
import { GestionarCuentaComponent } from './components/gestionar-cuenta/gestionar-cuenta.component';
import { CambiarMPComponent } from './components/cambiar-mp/cambiar-mp.component';
import { CambiarPlanComponent } from './components/cambiar-plan/cambiar-plan.component';
import { RegistrarNominaComponent } from './components/registrar-nomina/registrar-nomina.component';
import { ListaNominaComponent } from './components/lista-nomina/lista-nomina.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NavbarComponent,
    CompanyComponent,
    UsersComponent,
    PaymentsComponent,
    ModulesComponent,
    GestionarCuentaComponent,
    CambiarMPComponent,
    CambiarPlanComponent,
    RegistrarNominaComponent,
    ListaNominaComponent,
    CrearUsuarioComponent,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
