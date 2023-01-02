import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test/test.service';

import { AddTestComponent } from './add-test.component';

const expectedUrl = 'http://localhost:8080/test';

describe('AddTestComponent', () => {
  let component: AddTestComponent;
  let fixture: ComponentFixture<AddTestComponent>;
  let httpController: HttpTestingController;
  let service: TestService;

  const mockTestList = {
    id: 10,
    name: "Some one Test",
    description: "Any"
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestComponent ], 
      imports: [HttpClientTestingModule],
      providers: [TestService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TestService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia insertar un nuevo test', () => {
    let newTest: any | undefined;
    let url =  expectedUrl + '/add' + '?id=' + mockTestList.id + '&name=' + mockTestList.name + '&description=' + mockTestList.description
    service.postTest(mockTestList).subscribe(result => {
      newTest = result;
    });

    const request = httpController.expectOne(
      {
        method: 'POST',
        url:url
      }
     );
    request.flush(mockTestList);
    httpController.verify();

    expect(newTest).toEqual(mockTestList);
  })


});
