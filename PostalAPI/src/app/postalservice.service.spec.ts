import { TestBed } from '@angular/core/testing';

import { PostalserviceService } from './postalservice.service';

describe('PostalserviceService', () => {
  let service: PostalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
