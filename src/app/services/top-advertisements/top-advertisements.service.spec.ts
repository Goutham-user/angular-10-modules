import { TestBed } from '@angular/core/testing';

import { TopAdvertisementsService } from './top-advertisements.service';

describe('TopAdvertisementsService', () => {
  let service: TopAdvertisementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopAdvertisementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
