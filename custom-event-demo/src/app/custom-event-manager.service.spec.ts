import { TestBed } from '@angular/core/testing';

import { CustomEventManagerService } from './custom-event-manager.service';

describe('CustomEventManagerService', () => {
  let service: CustomEventManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomEventManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
