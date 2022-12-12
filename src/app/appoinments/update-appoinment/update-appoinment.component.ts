import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import { TestService } from 'src/app/services/test/test.service';
import { Appoinment } from 'src/app/models/Appoinment';


@Component({
  selector: 'app-update-appoinment',
  templateUrl: './update-appoinment.component.html',
  styleUrls: ['./update-appoinment.component.css']
})
export class UpdateAppoinmentComponent implements OnInit {
  pipe = new DatePipe('en-US');
  selectedIdTest: number;
  selectedIdAffiliate: number;
  appoinment: any[];
  test: any[];
  dateAppoinment: Date;
  data = new Appoinment();
  pruebitaFecha: Date;

  constructor(private route: Router, private affiliateService: AffiliateService, private testService: TestService, private appoinmentService: AppoinmentService) { }

  ngOnInit(): void {
    this.getAllAppoinments();
    this.getAllTest();
    this.fillFieldsAffiliate()

  }

  changeFormat(changed: Date) {
    let ChangedFormat = this.pipe.transform(changed, 'YYYY/MM/dd');
    return ChangedFormat;
  }


  getAllAppoinments() {
    this.affiliateService.getList().subscribe((result: any[]) => this.appoinment = result);
  }

  getAllTest() {
    this.testService.getList().subscribe((result: any[]) => this.test = result);
  }


  fillFieldsAffiliate() {
    let idAppoinment = localStorage.getItem("idAppoinment");

    this.appoinmentService.getById(+idAppoinment).subscribe((result: any) => { this.data = result });
    this.pruebitaFecha = this.data.date;
    console.log(this.changeFormat(this.data.date))

  }


  updateAppoinment() {
    this.appoinmentService.putAppoinment(this.data.id, this.changeFormat(this.data.date),this.data.hour, this.data.id_test, this.data.id_affiliate ).subscribe((datos: any) => {
    }
    )
    alert('Cita actualizada')
    console.log("La fecha: " + this.data.date);
    this.route.navigate(["appoinment"]);
  }


  whatHappend() {
    console.log("La fecha es:" + this.changeFormat(this.data.date));

  }


  cancelButton() {
    this.route.navigate(["appoinment"]);
  }


}


