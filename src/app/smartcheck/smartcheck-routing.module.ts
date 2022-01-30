import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckComponent } from './check/check.component';
const routes: Routes = [
  {
    path: 'check',
    component: CheckComponent
  },
  {
    path: '',
    redirectTo: 'check',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartcheckRoutingModule { }
