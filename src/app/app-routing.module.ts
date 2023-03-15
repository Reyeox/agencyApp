import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './components/agencies/agencies.component';

const routes: Routes = [
  {path: '', component: AgenciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
