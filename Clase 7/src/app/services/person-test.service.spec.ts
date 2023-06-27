import { TestBed } from '@angular/core/testing';

import { PersonTestService } from './person-test.service';

describe('PersonTestService', () => {
  let service: PersonTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
