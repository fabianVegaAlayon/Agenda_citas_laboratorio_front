import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterService } from '../services/master/master.service';

import { MasterComponent } from './master.component';

const expectedUrl = 'http://localhost:8080/master';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;
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
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterComponent ],
      imports: [HttpClientTestingModule],
      providers: [MasterService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MasterService);
    httpController = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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


it("Debe generar una lista maestra con informacion por fecha", () => {
  let mockDate: any  | undefined = '17/12/2022';
  let affiliateMock: any | undefined;
  let url = expectedUrl + '/date/' + mockDate;
  service.getMasterByDate(mockDate).subscribe(result => {
    affiliateMock = result;
  });

  const request = httpController.expectOne(url);
  request.flush(mockAffiliateInformation);
  httpController.verify();

  expect(affiliateMock).toEqual(mockAffiliateInformation);

});





});