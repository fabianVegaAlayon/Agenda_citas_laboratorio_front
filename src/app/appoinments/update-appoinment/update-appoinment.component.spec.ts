import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';

import { UpdateAppoinmentComponent } from './update-appoinment.component';

const expectedUrl = 'http://localhost:8080/appoinment';

describe('UpdateAppoinmentComponent', () => {
  let component: UpdateAppoinmentComponent;
  let fixture: ComponentFixture<UpdateAppoinmentComponent>;
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
      declarations: [UpdateAppoinmentComponent],
      imports: [HttpClientTestingModule],
      providers: [AppoinmentService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AppoinmentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Deberia Actualizar una cita', () => {
    let expectedMessage: string = "Appoinment Updated";
    let message: any | undefined;
    let url = expectedUrl + '/update' + '?id=' + mockAppoinmentInformation.id + '&date=' + mockAppoinmentInformation.date + '&hour=' + mockAppoinmentInformation.hour + '&id_test=' + mockAppoinmentInformation.id_test + '&id_affiliate=' + mockAppoinmentInformation.id_affiliate
    service.putAppoinment(mockAppoinmentInformation.id, mockAppoinmentInformation.date, mockAppoinmentInformation.hour, mockAppoinmentInformation.id_test, mockAppoinmentInformation.id_affiliate).subscribe(result => {
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
