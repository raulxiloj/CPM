import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventosListComponent } from './components/inventos-list/inventos-list.component';
import { ReportsComponent } from './components/reports/reports.component'

import { InventosService } from './services/inventos.service';
import { ReportsService } from './services/reports.service';
import { EncuestasListComponent } from './components/encuestas-list/encuestas-list.component';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { ProfsListComponent } from './components/profs-list/profs-list.component';
import { InventoresListComponent } from './components/inventores-list/inventores-list.component';
import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { InventorFormComponent } from './components/inventor-form/inventor-form.component';
import { InventoFormComponent } from './components/invento-form/invento-form.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventosListComponent,
    ReportsComponent,
    EncuestasListComponent,
    PaisesListComponent,
    ProfsListComponent,
    InventoresListComponent,
    EncuestaFormComponent,
    PaisFormComponent,
    ProfFormComponent,
    InventorFormComponent,
    InventoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    InventosService,
    ReportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
