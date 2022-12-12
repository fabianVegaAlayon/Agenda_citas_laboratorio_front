import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/Test';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {
  test: Test;
  constructor(private testService: TestService, private route: Router) { }

  ngOnInit(): void {
    this.fillFieldsAffiliate();
  }


  fillFieldsAffiliate() {
    let idTest = localStorage.getItem("idTest");
    this.testService.getById(+idTest).subscribe((result: Test) => { this.test = result });
  }

  updateAffiliate() {
    this.testService.putTest(this.test).subscribe((datos: any) => {
    }
    )
    alert('Test actualizado')
    this.route.navigate(["test"]);
  }


  cancelButton() {
    this.route.navigate(["test"]);
  }



}
