import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/Test';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'options'];
  test: Test[];
  stats: any;
  id_affiliate: number;

  constructor(private testService: TestService, private route: Router) { }

  ngOnInit(): void {
    this.getAllTest();
  }


  getAllTest() {
    this.testService.getList().subscribe((result: Test[]) => this.test = result);
  }

  deleteTest(id: number) {
    console.log(id)
    this.testService.deleteTest(id).subscribe(
      {
        next: () => {
          alert('la petición fue exitosa')

        },
        error: () => {

          this.getAllTest();

        }
      }

    );


  }


  getTestId(id: number) {
    localStorage.setItem("idTest", id.toString());
    this.route.navigate(["updateTest"]);

  }


  addTest() {
    this.route.navigate(["addTest"]);
  }



}
