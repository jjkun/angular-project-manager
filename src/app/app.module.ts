import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ProjectListService } from './auth/project-list/services/project-list.service';
import { LoginComponent } from './public/login/login.component';
import { AthenticationService, } from './common/services/athentication.service';
import { HttpService, } from './common/services/http.service';
//Guardias de las rutas (permisos de acceso)
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';
//importamos las rutas
import { routes } from './routes';

import { Ng2Webstorage } from 'ngx-webstorage';
import { HomeComponent } from './auth/home/home.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SortingComponent } from './common/sorting/sorting.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2Webstorage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) //agregamos las rutas a RouterModule
  ],
  providers: [ProjectListService,AthenticationService,HttpService,AuthGuard,PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
