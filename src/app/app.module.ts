import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginActivateService } from './login-activate.service';
import { ProductServiceService } from './product-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './entry/entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip'; 

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule
  ],
  exports :[MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,BrowserAnimationsModule,
    MatDividerModule,MatTooltipModule],
  providers: [LoginActivateService,AuthService, ProductServiceService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


 }
