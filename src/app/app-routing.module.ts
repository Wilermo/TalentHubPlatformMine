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
import { CambiarPlanComponent } from './components/cambiar-plan/cambiar-plan.component';
import { CambiarMPComponent } from './components/cambiar-mp/cambiar-mp.component';
import { RegistrarHojaComponent } from './components/registrar-hoja/registrar-hoja.component';
import { ListaNominaComponent } from './components/lista-nomina/lista-nomina.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CuponComponent } from './components/cupon/cupon.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { TarjetaVisaComponent } from './components/tarjeta-visa/tarjeta-visa.component';
import { ListaAspirantesComponent } from './components/lista-aspirantes/lista-aspirantes.component';
import { CausalesDespidoComponent } from './components/causales-despido/causales-despido.component';
import { ProgresoSalidaComponent } from './components/progreso-salida/progreso-salida.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { AspirantesComponent } from './components/aspirantes/aspirantes.component';
import { AgregarAspirantesComponent } from './components/agregar-aspirantes/agregar-aspirantes.component';
import { DetallesAspiranteComponent } from './components/detalles-aspirante/detalles-aspirante.component';
import { ProgresoDetallesComponent } from './components/progreso-detalles/progreso-detalles.component';
import { RegistrarCausalComponent } from './components/registrar-causal/registrar-causal.component';
import { EditarCausalComponent } from './components/editar-causal/editar-causal.component';
import { RegistrarDespidoComponent } from './components/registrar-despido/registrar-despido.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { AgregarConvocatoriaComponent } from './components/agregar-convocatoria/agregar-convocatoria.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'cambiar-plan', component: CambiarPlanComponent },
  { path: 'cambiar-mp', component: CambiarMPComponent },
  { path: 'slidebar', component: SlidebarComponent },

  {
    path: '', // Utiliza una ruta vacía como prefijo para las rutas con Navbar
    component: SlidebarComponent, // Este componente actúa como un layout
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'users', component: UsersComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'modules', component: ModulesComponent },
      { path: 'payment-info', component: PaymentInfoComponent },
      { path: 'registrar-hoja', component: RegistrarHojaComponent },
      { path: 'lista-nomina', component: ListaNominaComponent },
      { path: 'lista-aspirantes', component: ListaAspirantesComponent },
      { path: 'crear-usuario', component: CrearUsuarioComponent },
      { path: 'crear-cuenta', component: CrearCuentaComponent },
      { path: 'cambiar-plan', component: CambiarPlanComponent },
      { path: 'visa', component: TarjetaVisaComponent },
      { path: 'causales-despido', component: CausalesDespidoComponent },
      { path: 'progreso-salida', component: ProgresoSalidaComponent },
      { path: 'editar-empresa', component: EditarEmpresaComponent },
      { path: 'aspirante', component: AspirantesComponent },
      { path: 'progreso-detalles/:id', component: ProgresoDetallesComponent },
      { path: 'registrar-causal', component: RegistrarCausalComponent },
      { path: 'editar-causal/:id', component: EditarCausalComponent },
      { path: 'registrar-despido', component: RegistrarDespidoComponent },
      { path: 'agregar-aspirante', component: AgregarAspirantesComponent},
      { path: 'convocatoria', component: ConvocatoriaComponent},
      { path: 'agregar-convocatoria', component: AgregarConvocatoriaComponent}

      // Ruta hija
      // Puedes añadir más rutas hijas que requieran Navbar aquí
    ]
  },
  { path: 'cupon', component: CuponComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
