import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/Test';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

test:Test;

testObj = new Test(0);

  constructor(private router:Router,private testService:TestService) { }

  ngOnInit(): void {
  }

  addTest() {
    this.testService.postTest(this.testObj).subscribe(datos => {

      alert('Registro Insertado Correctamente');
      this.router.navigate(["test"]);

    });
  }




  cancelButton() {
    this.router.navigate(["test"]);
  }


  
}
