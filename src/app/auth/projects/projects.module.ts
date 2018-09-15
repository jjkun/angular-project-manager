import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JasperoAlertsModule } from '@jaspero/ng-alerts'; 

import { ProjectListService } from './project-list/services/project-list.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './project-list/new-project/new-project.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { SharedComponentsModule } from '../../modules/shared-components/shared-components.module';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    JasperoAlertsModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    NewProjectComponent,
    ProjectsHomeComponent
  ],
  exports:[
    ProjectListComponent
  ],
  providers:[ProjectListService]
})
export class ProjectsModule { }