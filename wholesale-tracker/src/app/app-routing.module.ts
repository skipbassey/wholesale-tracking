import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'leads', component: DashboardComponent, 
  },
  {   
    path: '', redirectTo: '/leads', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
