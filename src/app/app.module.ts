import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { AffiliateComponent } from './Affiliates/affiliate/affiliate.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MasterComponent } from './master/master.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAffiliateComponent } from './Affiliates/add-affiliate/add-affiliate.component';
import { UpdateAffiliateComponent } from './Affiliates/update-affiliate/update-affiliate.component';




@NgModule({
  declarations: [
    AppComponent,
    AffiliateComponent,
    AppoinmentComponent,
    MasterComponent,
    NavBarComponent,
    AddAffiliateComponent,
    UpdateAffiliateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
