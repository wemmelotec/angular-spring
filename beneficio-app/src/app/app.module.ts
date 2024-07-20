import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficioAddComponent } from './components/beneficio-add/beneficio-add.component';
import { BeneficioDetailComponent } from './components/beneficio-detail/beneficio-detail.component';
import { BeneficioListComponent } from './components/beneficio-list/beneficio-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficioListComponent,
    BeneficioDetailComponent,
    BeneficioAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
