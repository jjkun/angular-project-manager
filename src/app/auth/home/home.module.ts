import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectsModule } from '../projects/projects.module';
import { HomeComponent } from './home.component';
import { IssuesModule } from '../issues-list/issues.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ProjectsModule,
    IssuesModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
