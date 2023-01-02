import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Affiliate } from 'src/app/models/Affiliate';
import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';

import { UpdateAffiliateComponent } from './update-affiliate.component';

const url = 'http://localhost:8080/affiliates';




describe('UpdateAffiliateComponent', () => {
  let component: UpdateAffiliateComponent;
  let fixture: ComponentFixture<UpdateAffiliateComponent>;
  let httpController: HttpTestingController;
  let service: AffiliateService;

  const mockAffiliateInformation =
  {
    id: 1,
    name:'Fulano',
    age: 23,
    mail: "f@any.com"
  }

  beforeEach(async () => {
      TestBed.configureTestingModule({
      //declarations: [UpdateAffiliateComponent],
      imports: [HttpClientTestingModule],
      providers: [AffiliateService],
    })
    //  .compileComponents();

    fixture = TestBed.createComponent(UpdateAffiliateComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
    service = TestBed.inject(AffiliateService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia Actualizar un afiliado', () => {
  let expectedMessage: string = "Affiliate Updated";
  let message: any | undefined;
  let expectedUrl = url +'/update' + '?id=' + mockAffiliateInformation.id + '&name=' + mockAffiliateInformation.name + '&age=' + mockAffiliateInformation.age + '&mail=' + mockAffiliateInformation.mail
  service.putAffiliate(mockAffiliateInformation).subscribe(result => {
    message = result;
  });

  const request = httpController.expectOne(
    {
      method: 'PUT',
      url: expectedUrl
    }
  );
  request.flush(expectedMessage);


  expect(message).toEqual(expectedMessage);
})



});
