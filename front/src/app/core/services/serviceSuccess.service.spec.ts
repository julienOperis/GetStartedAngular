import { TestBed } from '@angular/core/testing';

import { ServiceSuccess } from './serviceSuccess.service';

describe('ServiceSuccessService', () => {
  let service: ServiceSuccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSuccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
