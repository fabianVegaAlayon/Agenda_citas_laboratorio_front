import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAffiliateComponent } from './Affiliates/add-affiliate/add-affiliate.component';
import { AffiliateComponent } from './Affiliates/affiliate/affiliate.component';
import { UpdateAffiliateComponent } from './Affiliates/update-affiliate/update-affiliate.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [


  {
    path: 'affiliate',
    component: AffiliateComponent
  },
  {
    path: 'addAffiliate',
    component: AddAffiliateComponent
  },
  {
    path: 'updateAffiliate',
    component: UpdateAffiliateComponent
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
