import { TestBed } from '@angular/core/testing';

import { SignUpAthenticationService } from './sign-up-athentication.service';

describe('SignUpAthenticationService', () => {
  let service: SignUpAthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpAthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
