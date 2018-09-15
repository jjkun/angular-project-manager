import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

import {JasperoAlertsModule} from '@jaspero/ng-alerts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { AthenticationService, } from './common/services/athentication.service';
import { HttpService, } from './common/services/http.service';

//Guardias de las rutas (permisos de acceso)
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';

import { Ng2Webstorage } from 'ngx-webstorage';
import { NotFoundComponent } from './common/not-found/not-found.component';

//Sub modulos de la aplicacion
import { ProjectsModule } from './auth/projects/projects.module';
import { AppRoutingModule } from './app-routing.module'; //Rutas
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2Webstorage,
    FormsModule,
    ReactiveFormsModule,
    ProjectsModule,
    JasperoAlertsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AthenticationService,HttpService,AuthGuard,PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
