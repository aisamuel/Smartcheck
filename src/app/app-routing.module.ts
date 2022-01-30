import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'smartcheck',
    loadChildren: () =>
      import('./smartcheck/smartcheck.module').then(m => m.SmartcheckModule)
  },
  
 
  {
    path: '',
    redirectTo: 'smartcheck',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
