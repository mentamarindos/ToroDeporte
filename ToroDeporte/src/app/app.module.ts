import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoUpdateComponent } from './components/productos/productos-update.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoUpdateComponent } from './components/empleados/empleados-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe, FilterPipeEmpleado } from './pipes/filter.pipe';
import { ContrasenaComponent } from './components/contrasena/contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    ProductoUpdateComponent,
    EmpleadosComponent,
    EmpleadoUpdateComponent,
    HeaderComponent,
    FilterPipe,
    FilterPipeEmpleado,
    ContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
