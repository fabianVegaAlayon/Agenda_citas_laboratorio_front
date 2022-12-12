import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinment } from 'src/app/models/Appoinment';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-add-appoinment',
  templateUrl: './add-appoinment.component.html',
  styleUrls: ['./add-appoinment.component.css']
})
export class AddAppoinmentComponent implements OnInit {
  pipe = new DatePipe('en-US');
  selectedIdTest: number;
  selectedIdAffiliate: number;
  appoinment: any[];
  test: any[];
  dateAppoinment: Date;
  hour: string;
  data: Appoinment;

  constructor(private affiliateService: AffiliateService, private testService: TestService, private appoinmentService: AppoinmentService, private route: Router) { }

  //method to change the date format 
  changeFormat(changed: Date) {
    let ChangedFormat = this.pipe.transform(changed, 'yyyy/MM/dd');
    return ChangedFormat;
  }


  ngOnInit(): void {
    this.getAllAppoinments();
    this.getAllTest();

  }
  getAllAppoinments() {
    this.affiliateService.getList().subscribe((result: any[]) => this.appoinment = result);
  }

  getAllTest() {
    this.testService.getList().subscribe((result: any[]) => this.test = result);
  }

  insertAppoinment(dateSel: Date, hour: string, idTest: number, idAff: number) {
    let id = 0;
    this.appoinmentService.postAppoinment(id, this.changeFormat(dateSel), hour, idTest, idAff).subscribe(datos => {
      alert('Registro Insertado Correctamente');

    });
  }
  cancelButton() {
    this.route.navigate(["appoinment"]);
  }

}
