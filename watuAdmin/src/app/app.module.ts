import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlertService } from './shared/services/alert.service';
import { HeaderService } from './shared/services/header.service';
import { TokenService } from './shared/services/token.service';

import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContenedorComponent } from './shared/componentes/contenedor/contenedor.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './shared/componentes/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './componentes/login/login.service';

import { AgenciasListComponent } from './componentes/agencias/agencias-list/agencias-list.component';
import { AgenciasAddComponent } from './componentes/agencias/agencias-add/agencias-add.component';
import { AgenciasViewComponent } from './componentes/agencias/agencias-view/agencias-view.component';
import { AgenciasEditComponent } from './componentes/agencias/agencias-edit/agencias-edit.component';
import { AgenciasService } from './componentes/agencias/agencias.service';

import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProgramasComponent } from './componentes/programas/programas.component';
import { ProgramaDetalleComponent } from './componentes/programas/programa-detalle/programa-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContenedorComponent,
    HomeComponent,
    MenuComponent,
    AgenciasListComponent,
    AgenciasAddComponent,
    AgenciasViewComponent,
    AgenciasEditComponent,
    UsuariosComponent,
    ProgramasComponent,
    ProgramaDetalleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule,
    MatGoogleMapsAutocompleteModule,
  ],
  providers: [
    LoginService,
    AgenciasService,
    AlertService,
    TokenService,
    HeaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
