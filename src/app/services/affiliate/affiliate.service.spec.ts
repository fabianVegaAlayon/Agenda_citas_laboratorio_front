import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';

const expectedUrl = 'http://localhost:8080/affiliates';

describe('AfiliateService', () => {
  let service: AffiliateService;
  let httpController: HttpTestingController;

  const mockAffiliateInformation =
  {
    id: 1,
    name: "Fulano",
    age: 23,
    mail: "f@any.com"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AffiliateService],

    });
    service = TestBed.inject(AffiliateService);
    httpController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it("Deberia obtener un afiliado por id", () => {
    let mockId: any  | undefined = 1;
    let affiliateMock: any | undefined;
    let url = expectedUrl +'/'+ mockId;
    service.getById(mockId).subscribe(result => {
      affiliateMock = result;
    });


    const request = httpController.expectOne(url);
    request.flush(mockAffiliateInformation);
    httpController.verify();

    expect(affiliateMock).toEqual(mockAffiliateInformation);
  });




});
