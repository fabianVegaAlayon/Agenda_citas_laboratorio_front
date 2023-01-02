import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppoinmentService } from './appoinment.service';


const expectedUrl  = 'http://localhost:8080/appoinment/'

describe('AppoinmentService', () => {
  let service: AppoinmentService;
  let httpController: HttpTestingController;
  const mockAppoinmentInformation =
  {

    id: 666,
    date: '2022/12/01',
    hour: '15:33:00',
    id_test: 2,
    id_affiliate: 1
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppoinmentService],
    });
    service = TestBed.inject(AppoinmentService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Deberia obtener una cita por id", () => {
    let mockId: any  | undefined = 1;
    let testMock: any | undefined;
    let url = expectedUrl +  mockId;
    service.getById(mockId).subscribe(result => {
      testMock = result;
    });


    const request = httpController.expectOne(url);
    request.flush(mockAppoinmentInformation);
    httpController.verify();

    expect(testMock).toEqual(mockAppoinmentInformation);
  });


});
