import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { UsersComponent } from './components/users/users.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ModulesComponent } from './components/modules/modules.component';
import { GestionarCuentaComponent } from './components/gestionar-cuenta/gestionar-cuenta.component';
import { CambiarMPComponent } from './components/cambiar-mp/cambiar-mp.component';
import { CambiarPlanComponent } from './components/cambiar-plan/cambiar-plan.component';
import { RegistrarHojaComponent } from './components/registrar-hoja/registrar-hoja.component';
import { ListaNominaComponent } from './components/lista-nomina/lista-nomina.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CuponComponent } from './components/cupon/cupon.component';
import { TarjetaVisaComponent } from './components/tarjeta-visa/tarjeta-visa.component';
import { CommonModule } from '@angular/common';
import { ListaAspirantesComponent } from './components/lista-aspirantes/lista-aspirantes.component';
import { CausalesDespidoComponent } from './components/causales-despido/causales-despido.component';
import { ProgresoSalidaComponent } from './components/progreso-salida/progreso-salida.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    CompanyComponent,
    UsersComponent,
    PaymentsComponent,
    ModulesComponent,
    GestionarCuentaComponent,
    CambiarMPComponent,
    CambiarPlanComponent,
    RegistrarHojaComponent,
    ListaNominaComponent,
    CrearUsuarioComponent,
    CrearCuentaComponent,
    CuponComponent,
    TarjetaVisaComponent,
    ListaAspirantesComponent,
    CausalesDespidoComponent,
    ProgresoSalidaComponent,
    EditarEmpresaComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
