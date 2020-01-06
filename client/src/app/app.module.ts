import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventosListComponent } from './components/inventos-list/inventos-list.component';
import { ReportsComponent } from './components/reports/reports.component'

import { InventosService } from './services/inventos.service';
import { ReportsService } from './services/reports.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventosListComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    InventosService,
    ReportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
