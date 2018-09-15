import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './issues-list.component';
import { NewIssueComponent } from './new-issue/new-issue.component';

const router : Routes = [
  {
    path:'' , component :IssuesListComponent
  },
  {
    path:'nuevo', component: NewIssueComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: []
})
export class IssuesRoutingModule { }
