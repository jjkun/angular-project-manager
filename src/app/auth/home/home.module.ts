import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectsModule } from '../projects/projects.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ProjectsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
