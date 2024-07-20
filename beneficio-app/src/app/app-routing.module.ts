import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficioListComponent } from './components/beneficio-list/beneficio-list.component';
import { BeneficioDetailComponent } from './components/beneficio-detail/beneficio-detail.component';
import { BeneficioAddComponent } from './components/beneficio-add/beneficio-add.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'list-beneficio', component: BeneficioListComponent},
  { path: 'beneficio/:id', component: BeneficioDetailComponent },
  { path: 'add-beneficio', component: BeneficioAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
