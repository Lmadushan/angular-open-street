import { TestBed } from '@angular/core/testing';

import { AngularOpenStreetService } from './angular-open-street.service';

describe('AngularOpenStreetService', () => {
  let service: AngularOpenStreetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularOpenStreetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
