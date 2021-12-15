import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';

import { EntryComponent } from './entry/entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [EntryComponent, DashboardComponent],
  imports: [
    CommonModule,
   
  ],
  exports: [
    EntryComponent,
    DashboardComponent
  ]
})
export class CustomerModule {
}
