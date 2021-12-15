import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { LoginActivateService } from './login-activate.service';

const routes: Routes = [
  { path: 'entry', component: EntryComponent },
  { path: '', redirectTo: "entry", pathMatch: "full"  },
  { path: 'dashboard', component: DashboardComponent,canActivate:[LoginActivateService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
