import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test/test.service';

import { UpdateTestComponent } from './update-test.component';

const expectedUrl = 'http://localhost:8080/test';

describe('UpdateTestComponent', () => {
  let component: UpdateTestComponent;
  let fixture: ComponentFixture<UpdateTestComponent>;
  let httpController: HttpTestingController;
  let service: TestService;

  const mockTestList = {
    id: 10,
    name: "Some one Test",
    description: "Any"
  }



  beforeEach(async () => {
     TestBed.configureTestingModule({
     // declarations: [ UpdateTestComponent ],
      imports: [HttpClientTestingModule],
      providers: [TestService],
    })
   // .compileComponents();

    fixture = TestBed.createComponent(UpdateTestComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TestService);
    httpController = TestBed.inject(HttpTestingController);
    //fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Deberia Actualizar un test', () => {
    let expectedMessage: string = "Test Updated";
    let message: any | undefined;
    let url = expectedUrl + '/update'+'?id='+mockTestList.id +'&name='+mockTestList.name + '&description=' + mockTestList.description
    service.putTest(mockTestList).subscribe(result => {
      message = result;
    });

    const request = httpController.expectOne(
      {
        method: 'PUT',
        url: url
      }
    );
    request.flush(expectedMessage);

    expect(message).toEqual(expectedMessage);
  })




});
