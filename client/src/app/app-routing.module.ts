import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventosListComponent } from './components/inventos-list/inventos-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EncuestasListComponent } from './components/encuestas-list/encuestas-list.component';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { ProfsListComponent } from './components/profs-list/profs-list.component';
import { InventoresListComponent } from './components/inventores-list/inventores-list.component';
import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { InventorFormComponent } from './components/inventor-form/inventor-form.component';
import { InventoFormComponent } from './components/invento-form/invento-form.component';

const routes: Routes = [
  {
    path: '',
    component: InventosListComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'encuestas',
    component: EncuestasListComponent
  },
  {
    path: 'nueva-encuesta',
    component: EncuestaFormComponent
  },
  {
    path: 'paises',
    component: PaisesListComponent
  },
  {
    path: 'nuevo-pais',
    component: PaisFormComponent
  },
  {
    path: 'profesionales',
    component: ProfsListComponent
  },
  {
    path: 'nuevo-profesional',
    component: ProfFormComponent
  },
  {
    path: 'inventores',
    component: InventoresListComponent
  },
  {
    path: 'nuevo-inventor',
    component: InventorFormComponent
  },
  {
    path: 'nuevo-invento',
    component: InventoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
