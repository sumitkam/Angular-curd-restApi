import { TestBed } from '@angular/core/testing';

import { CurdApiService } from './curd-api.service';

describe('CurdApiService', () => {
  let service: CurdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
