import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventosListComponent } from './components/inventos-list/inventos-list.component';
import { ReportsComponent } from './components/reports/reports.component';


const routes: Routes = [
  {
    path: '',
    component: InventosListComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
