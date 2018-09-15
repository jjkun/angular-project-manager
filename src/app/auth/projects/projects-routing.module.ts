import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './project-list/new-project/new-project.component';
import { AuthGuard } from '../../common/guards/auth.guard';

const routes : Routes = [
  {
    path:'', component: ProjectListComponent
  },
  {
     path: 'detalle/:id', component: ProjectDetailComponent 
  },
  {
    path: 'nuevo',
    component: NewProjectComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ProjectsRoutingModule { }
