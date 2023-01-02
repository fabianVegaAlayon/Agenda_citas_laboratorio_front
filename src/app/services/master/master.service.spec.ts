import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
const expectedUrl = 'http://localhost:8080/master';

describe('MasterService', () => {
  let service: MasterService;
  let httpController: HttpTestingController;

  const mockAffiliateInformation =
  {
    idAffiliate: 1,
    nameAffiliate: "Fulano",
    age: 23,
    mail: "f@any.com",
    idAppoinment: 75,
    dateAppoinment:'17/12/2022',
    hour:'15:00:24',
    testName: 'some one'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MasterService],
    });
    service = TestBed.inject(MasterService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Debe generar una lista maestra con informacion por id", () => {
    let mockId: any  | undefined = 1;
    let affiliateMock: any | undefined;
    let url = expectedUrl + '/id/' + mockId;
    service.getMasterById(mockId).subscribe(result => {
      affiliateMock = result;
    });

    const request = httpController.expectOne(url);
    request.flush(mockAffiliateInformation);
    httpController.verify();

    expect(affiliateMock).toEqual(mockAffiliateInformation);

});




});
