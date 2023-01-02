import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

const expectedUrl = 'http://localhost:8080/test/';

describe('TestService', () => {
  let service: TestService;
  let httpController: HttpTestingController;

  const mockTestList = {
    id: 10,
    name: "Some one Test",
    description: "Any"
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Deberia obtener un registro por id", () => {
    let mockId: any  | undefined = 1;
    let testMock: any | undefined;
    let url = expectedUrl +  + mockId;
    service.getById(mockId).subscribe(result => {
      testMock = result;
    });


    const request = httpController.expectOne(url);
    request.flush(mockTestList);
    httpController.verify();

    expect(testMock).toEqual(mockTestList);
  });


});
