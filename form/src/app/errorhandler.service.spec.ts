import { TestBed } from '@angular/core/testing';

import { ErrorhandlerService } from './errorhandler';

describe('ErrorhandlerService', () => {
  let service: ErrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
