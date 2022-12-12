import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinment } from '../../models/Appoinment';
import { AppoinmentService } from '../../services/appoinment/appoinment.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  displayedColumns: string[] = ['idAppoinment', 'dateAppoinment', 'hourAppoinment', 'idTest', 'idAffiliate', 'options'];
  appoinment: Appoinment[];
  pipe = new DatePipe('en-US');

  constructor(private appoinmentService: AppoinmentService, private route: Router) { }

  ngOnInit(): void {
    this.getAllAppoinments();
  }

  //method to change the date format 
  changeFormat(changed: Date) {
    let ChangedFormat = this.pipe.transform(changed, 'dd/MM/YYYY');
    return ChangedFormat;
  }

  getAllAppoinments() {
    this.appoinmentService.getList().subscribe((result: Appoinment[]) => this.appoinment = result);
  }


  addAppoinment() {
    this.route.navigate(["addAppoinment"]);
  }

  deleteAppoinment(id: number) {
    console.log(id)
    this.appoinmentService.deleteAppoinment(id).subscribe(
      {
        next: () => {
          alert('la petición fue exitosa')

        },
        error: () => {
          this.getAllAppoinments();

        }
      }

    );
    this.getAllAppoinments();

  }

  getAppoinmentId(id: number) {
    localStorage.setItem("idAppoinment", id.toString());
    this.route.navigate(["updateAppoinment"]);

  }



}
