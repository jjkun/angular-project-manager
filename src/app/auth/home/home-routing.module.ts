import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../common/guards/auth.guard';

const routes : Routes = [
  {
    path:'home' , component: HomeComponent, pathMatch: 'full'
  },
  {
    path:'proyectos', loadChildren: './../projects/projects.module#ProjectsModule', data: { name: 'Proyectos' }, canActivate: [ AuthGuard ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
