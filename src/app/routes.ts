import {Routes} from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';

export const routes: Routes = [
    {
        path: '' , pathMatch: 'full', redirectTo: '/login'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'proyectos', component: ProjectListComponent
    }
]