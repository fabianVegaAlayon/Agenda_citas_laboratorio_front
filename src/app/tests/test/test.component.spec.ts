import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test/test.service';

import { TestComponent } from './test.component';

const expectedUrl = 'http://localhost:8080/test';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let HttpController: HttpTestingController;
  let service: TestService;

  const mockTestList = {
    id: 10,
    name: "Some one Test",
    description: "Any"
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HttpClientTestingModule],
      providers: [TestService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(TestService);
    HttpController = TestBed.inject(HttpTestingController);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Trae la lista de los Examenes', () => {
    let test: any | undefined;
    service.getList().subscribe(result => {
      test = result;
    });

    const request = HttpController.expectOne(expectedUrl + 's');
    request.flush(mockTestList);
    expect(test).toEqual(mockTestList);
  })


  it('Deberia eliminar un test por id', () => {
    let mockId: number | undefined = 1;
    let expectedMessage: string = "Test deleted sucess!";
    let message: any | undefined;
    let url = expectedUrl + '/delete/' + mockId;
    service.deleteTest(mockId).subscribe(resultado => {
      message = resultado;
    });
    const request = HttpController.expectOne({
      method: 'DELETE',
      url: url
    });
    request.flush(expectedMessage);


    expect(message).toEqual(expectedMessage);


  })




});
