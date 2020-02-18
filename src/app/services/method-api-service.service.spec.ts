import { TestBed } from '@angular/core/testing';

import { MethodApiServiceService } from './method-api-service.service';

describe('MethodApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethodApiServiceService = TestBed.get(MethodApiServiceService);
    expect(service).toBeTruthy();
  });
});
