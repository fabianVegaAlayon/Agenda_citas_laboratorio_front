import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppoinmentComponent } from './update-appoinment.component';

describe('UpdateAppoinmentComponent', () => {
  let component: UpdateAppoinmentComponent;
  let fixture: ComponentFixture<UpdateAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
