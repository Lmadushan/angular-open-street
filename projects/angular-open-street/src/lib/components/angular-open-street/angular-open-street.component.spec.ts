import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOpenStreetComponent } from './angular-open-street.component';

describe('AngularOpenStreetComponent', () => {
  let component: AngularOpenStreetComponent;
  let fixture: ComponentFixture<AngularOpenStreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularOpenStreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOpenStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
