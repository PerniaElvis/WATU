import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

import { AgenciasListComponent } from './componentes/agencias/agencias-list/agencias-list.component';
import { AgenciasAddComponent } from './componentes/agencias/agencias-add/agencias-add.component';
import { AgenciasViewComponent } from './componentes/agencias/agencias-view/agencias-view.component';
import { AgenciasEditComponent } from './componentes/agencias/agencias-edit/agencias-edit.component';

import { LoginComponent } from './componentes/login/login.component';
import { ContenedorComponent } from './shared/componentes/contenedor/contenedor.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProgramasComponent } from './componentes/programas/programas.component';
import { ProgramaDetalleComponent } from './componentes/programas/programa-detalle/programa-detalle.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: ContenedorComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'agencias',
        component: AgenciasListComponent,
      },
      {
        path: 'agencias/agregar',
        component: AgenciasAddComponent,
      },
      {
        path: 'agencias/:id',
        component: AgenciasViewComponent,
      },
      {
        path: 'agencias/editar/:id',
        component: AgenciasEditComponent,
      },
      {
        path: 'programs/:id',
        component: ProgramasComponent,
      },
      {
        path: 'users',
        component: UsuariosComponent,
      },
      {
        path: 'program/:id',
        component: ProgramaDetalleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
