import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [


  {
    path: 'affiliate',
    component: AffiliateComponent
  },
  {
    path: 'appoinment',
    component: AppoinmentComponent
  },
  {
    path: 'master',
    component: MasterComponent
  }




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
