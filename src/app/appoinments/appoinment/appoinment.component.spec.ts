import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppoinmentComponent } from './appoinment.component';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';


const expectedUrl = 'http://localhost:8080/appoinment';


describe('AppoinmentComponent', () => {
  let component: AppoinmentComponent;
  let fixture: ComponentFixture<AppoinmentComponent>;
  let httpMock: HttpTestingController;
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
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppoinmentService],

    });
    service = TestBed.inject(AppoinmentService);
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('Trae la lista de las citas', () => {
    let actualAppoinment: any | undefined;
    service.getList().subscribe(resultado => {
      actualAppoinment = resultado;
    });

    const request = httpMock.expectOne(expectedUrl);
    request.flush(mockAppoinmentInformation);
    httpMock.verify();

    expect(actualAppoinment).toEqual(mockAppoinmentInformation);


  })

  it('Elimina una cita por id', () => {
    let mockId: number | undefined = 1;
    let expectedMessage: string = "Appoinment deleted sucess!";
    let message: any | undefined;
    let url = expectedUrl + '/delete/' + mockId;
    service.deleteAppoinment(mockId).subscribe(resultado => {
      message = resultado;
    });

    const request = httpMock.expectOne(url);
    request.flush(expectedMessage);
    httpMock.verify();

    expect(message).toEqual(expectedMessage);
  })





});
