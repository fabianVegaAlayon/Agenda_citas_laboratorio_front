import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';

import { AddAppoinmentComponent } from './add-appoinment.component';

const expectedUrl = 'http://localhost:8080/appoinment';


describe('AddAppoinmentComponent', () => {
  let component: AddAppoinmentComponent;
  let fixture: ComponentFixture<AddAppoinmentComponent>;
  let httpController: HttpTestingController;
  let service: AppoinmentService;
  const mockAppoinmentInformation =
  {

    id: 666,
    date: '2022/12/01',
    hour: '15:33:00',
    id_test: 2,
    id_affiliate: 1
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppoinmentComponent],
      imports: [HttpClientTestingModule],
      providers: [AppoinmentService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AppoinmentService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia insertar una nueva cita', () => {
    let newAppoinment: any | undefined;
    let url =  expectedUrl + '/add' + '?id=' + mockAppoinmentInformation.id + '&date=' + mockAppoinmentInformation.date + '&hour=' + mockAppoinmentInformation.hour + '&id_test=' + mockAppoinmentInformation.id_test + '&id_affiliate=' + mockAppoinmentInformation.id_affiliate
    service.postAppoinment(mockAppoinmentInformation.id, mockAppoinmentInformation.date, mockAppoinmentInformation.hour, mockAppoinmentInformation.id_test, mockAppoinmentInformation.id_affiliate).subscribe(result => {
      newAppoinment = result;
    });

    const request = httpController.expectOne(
      {
        method: 'POST',
        url:url
      }
     );
    request.flush(mockAppoinmentInformation);
    //httpController.verify();

    expect(newAppoinment).toEqual(mockAppoinmentInformation);
  })


});
