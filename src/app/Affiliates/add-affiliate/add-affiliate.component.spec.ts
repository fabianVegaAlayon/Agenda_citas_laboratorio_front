import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';


import { AddAffiliateComponent } from './add-affiliate.component';

const url = 'http://localhost:8080/affiliates';

describe('AddAffiliateComponent', () => {
  let component: AddAffiliateComponent;
  let fixture: ComponentFixture<AddAffiliateComponent>;
  let httpController: HttpTestingController;
  let service: AffiliateService;

  const mockAffiliateInformation =
  {
    id: 1,
    name: "Fulano",
    age: 23,
    mail: "f@any.com"
  }



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAffiliateComponent ],
      imports: [HttpClientTestingModule],
      providers: [AffiliateService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AffiliateService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deberia insertar un nuevo afiliado', () => {
    let newAffiliate: any | undefined;
    let expectedUrl =  url + '/add' + '?id=' + mockAffiliateInformation.id + '&name=' + mockAffiliateInformation.name + '&age=' + mockAffiliateInformation.age + '&mail=' + mockAffiliateInformation.mail
    service.postAffiliate(mockAffiliateInformation).subscribe(result => {
      newAffiliate = result;
    });

    const request = httpController.expectOne(
      {
        method: 'POST',
        url:expectedUrl
      }
     );
    request.flush(mockAffiliateInformation);
    //httpController.verify();

    expect(newAffiliate).toEqual(mockAffiliateInformation);
  })


});
