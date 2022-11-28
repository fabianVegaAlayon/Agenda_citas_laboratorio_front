import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Master } from '../models/Master';
import { MasterService } from '../master.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  idAffiliate = 0;
  dateAppoinment: Date;
  masterData: Master[];
  displayedColumns: string[] = ['id_affiliate', 'name_affiliate', 'age', 'mail'];
  pipe = new DatePipe('en-US');
  dateFormatter: string;

  constructor(private masterService: MasterService, private route: Router) { }

  ngOnInit(): void {
  }

  //method to change the date format 
  changeFormat(changed: Date) {
    let ChangedFormat = this.pipe.transform(changed, 'dd-MM-YYYY');
    return ChangedFormat;
  }



  listByDate() {
    this.dateFormatter = this.changeFormat(this.dateAppoinment);
    this.masterService.getMasterByDate(this.dateFormatter).subscribe((result: any) => this.masterData = result);

    console.log('Esta es la variable: ' + this.changeFormat(this.dateAppoinment));
  }


  listById() {
    this.masterService.getMasterById(this.idAffiliate).subscribe((result: Master[]) => this.masterData = result);
  }

}
