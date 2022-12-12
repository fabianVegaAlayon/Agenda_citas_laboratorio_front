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
import { MasterComponent } from './master/master.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAffiliateComponent } from './Affiliates/add-affiliate/add-affiliate.component';
import { UpdateAffiliateComponent } from './Affiliates/update-affiliate/update-affiliate.component';
import { AddAppoinmentComponent } from './appoinments/add-appoinment/add-appoinment.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select';
import { AppoinmentComponent } from './appoinments/appoinment/appoinment.component';
import { UpdateAppoinmentComponent } from './appoinments/update-appoinment/update-appoinment.component';
import { TestComponent } from './tests/test/test.component';
import { AddTestComponent } from './tests/add-test/add-test.component';
import { UpdateTestComponent } from './tests/update-test/update-test.component';
@NgModule({
  declarations: [
    AppComponent,
    AffiliateComponent,
    MasterComponent,
    NavBarComponent,
    AddAffiliateComponent,
    UpdateAffiliateComponent,
    AppoinmentComponent,
    AddAppoinmentComponent,
    UpdateAppoinmentComponent,
    TestComponent,
    AddTestComponent,
    UpdateTestComponent
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
    MatNativeDateModule, 
    NgxMaterialTimepickerModule,
    MatSelectModule
  

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
