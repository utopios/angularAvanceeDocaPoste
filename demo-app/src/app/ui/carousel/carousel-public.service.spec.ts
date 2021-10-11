import { TestBed } from '@angular/core/testing';

import { CarouselPublicService } from './carousel-public.service';

describe('CarouselPublicService', () => {
  let service: CarouselPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
