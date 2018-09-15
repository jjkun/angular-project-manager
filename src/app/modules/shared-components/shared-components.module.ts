import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SortingComponent } from './sorting/sorting.component';
import { GroupingComponent } from './grouping/grouping.component';
import { MomentPipePipe } from './pipes/moment-pipe.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipePipe
  ],
  exports:[
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipePipe
  ]
})
export class SharedComponentsModule { }




