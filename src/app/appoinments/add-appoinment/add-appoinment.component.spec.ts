import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoinmentComponent } from './add-appoinment.component';

describe('AddAppoinmentComponent', () => {
  let component: AddAppoinmentComponent;
  let fixture: ComponentFixture<AddAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
