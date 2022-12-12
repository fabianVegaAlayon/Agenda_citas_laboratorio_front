import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAffiliateComponent } from './Affiliates/add-affiliate/add-affiliate.component';
import { AffiliateComponent } from './Affiliates/affiliate/affiliate.component';
import { UpdateAffiliateComponent } from './Affiliates/update-affiliate/update-affiliate.component';
import { AddAppoinmentComponent } from './appoinments/add-appoinment/add-appoinment.component';
import { AppoinmentComponent} from './appoinments/appoinment/appoinment.component'
import { UpdateAppoinmentComponent } from './appoinments/update-appoinment/update-appoinment.component';
import { MasterComponent } from './master/master.component';
import { AddTestComponent } from './tests/add-test/add-test.component';
import { TestComponent } from './tests/test/test.component';
import { UpdateTestComponent } from './tests/update-test/update-test.component';

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
    path: 'addAppoinment',
    component: AddAppoinmentComponent
  },
  {
    path: 'updateAppoinment',
    component: UpdateAppoinmentComponent
  },
  {
    path: 'master',
    component: MasterComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'addTest',
    component: AddTestComponent
  },
  {
    path: 'updateTest',
    component: UpdateTestComponent
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
