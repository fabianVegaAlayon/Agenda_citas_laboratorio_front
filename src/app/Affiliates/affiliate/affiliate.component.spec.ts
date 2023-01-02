import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';
import { AffiliateComponent } from './affiliate.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


const expectedUrl = 'http://localhost:8080/affiliates';

describe('AffiliateComponent', () => {
  let component: AffiliateComponent;
  let fixture: ComponentFixture<AffiliateComponent>;
  let service: AffiliateService;
  let httpController: HttpTestingController;


  const mockAffiliateInformation =
  {
    id: 1,
    name: "Fulano",
    age: 23,
    mail: "f@any.com"
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AffiliateService],

    });
    service = TestBed.inject(AffiliateService);
    httpController = TestBed.inject(HttpTestingController)
  });



  it("Debe generar una lista con informacion", () => {
    let affiliateMock: any | undefined;
    service.getList().subscribe(result => {
      affiliateMock = result;
    });

    const request = httpController.expectOne(expectedUrl);
    request.flush(mockAffiliateInformation);
    httpController.verify();

    expect(affiliateMock).toEqual(mockAffiliateInformation);



  });

  it("la eliminacion Debe generar un mensaje de notificacion exitoso", () => {
    let mockId: number | undefined = 1;
    let expectedMessage: string = "Affiliate deleted sucess!";
    let message: any | undefined;
    let url = expectedUrl + '/delete/' + mockId;
    service.deleteAffiliate(mockId).subscribe(resultado => {
      message = resultado;
    });

    const request = httpController.expectOne(url);
    request.flush(expectedMessage);
    httpController.verify();

    expect(message).toEqual(expectedMessage);
  })





});
