import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './nav-bar/nav-bar.component';
// Modules
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadService } from 'src/services/lead.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    LeadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
