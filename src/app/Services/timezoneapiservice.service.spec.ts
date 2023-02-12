import { TestBed } from '@angular/core/testing';

import { TimezoneapiserviceService } from './timezoneapiservice.service';

describe('TimezoneapiserviceService', () => {
  let service: TimezoneapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
