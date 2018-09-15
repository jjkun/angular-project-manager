import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AuthGuard } from './common/guards/auth.guard';
import { NewIssueComponent } from './auth/issues-list/new-issue/new-issue.component';
import { HomeComponent } from './auth/home/home.component';
import { PublicGuard } from './common/guards/public.guard';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', loadChildren: './public/login/login.module#LoginModule' , pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'auth/home', loadChildren: './auth/home/home.module#HomeModule', data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  // {
  //   path: 'proyectos', component: ProjectsHomeComponent,
  //   data: { name: 'Proyectos' }, canActivate: [ AuthGuard ],
  //   children: [
  //     { path: '', component: ProjectListComponent,  pathMatch: 'full' },
  //     { path: 'detalle/:id', component: ProjectDetailComponent },
  //     ]
  // },
  // {
  //   path: 'issues', component: IssuesListComponent, data: { name: 'Issues' }, canActivate: [ AuthGuard ]
  // },
  // {
  //   path: 'proyectos/nuevo',
  //   component: NewProjectComponent,
  //   canActivate: [ AuthGuard ]
  // },
  {
    path: 'issues/nuevo',
    component: NewIssueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { 

}
