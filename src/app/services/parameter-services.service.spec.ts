import { TestBed } from '@angular/core/testing';

import { ParameterServicesService } from './parameter-services.service';

describe('ParameterServicesService', () => {
  let service: ParameterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParameterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
