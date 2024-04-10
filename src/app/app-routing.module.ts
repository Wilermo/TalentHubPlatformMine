import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CambiarPlanComponent } from './components/cambiar-plan/cambiar-plan.component';
import { CambiarMPComponent } from './components/cambiar-mp/cambiar-mp.component';

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
      { path: 'home', component: HomeComponent }
       // Ruta hija
      // Puedes añadir más rutas hijas que requieran Navbar aquí
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
