import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CompanyComponent } from './components/company/company.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ModulesComponent } from './components/modules/modules.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CambiarPlanComponent } from './components/cambiar-plan/cambiar-plan.component';
import { CambiarMPComponent } from './components/cambiar-mp/cambiar-mp.component';
import { RegistrarNominaComponent } from './components/registrar-nomina/registrar-nomina.component';
import { ListaNominaComponent } from './components/lista-nomina/lista-nomina.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CuponComponent } from './components/cupon/cupon.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'forgot', component:ForgotPasswordComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'cambiar-plan', component:CambiarPlanComponent},
  {path: 'cambiar-mp', component:CambiarMPComponent},

  {
    path: '', // Utiliza una ruta vacía como prefijo para las rutas con Navbar
    component: NavbarComponent, // Este componente actúa como un layout
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'users', component: UsersComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'modules', component: ModulesComponent },
      { path: 'payment-info', component: PaymentInfoComponent},
      { path: 'registrar-nomina', component: RegistrarNominaComponent },
      { path: 'lista-nomina', component: ListaNominaComponent },
      { path: 'crear-usuario', component: CrearUsuarioComponent },
      { path: 'crear-cuenta', component: CrearCuentaComponent },
       // Ruta hija
      // Puedes añadir más rutas hijas que requieran Navbar aquí
    ]
  },
 {path: 'cupon', component: CuponComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
