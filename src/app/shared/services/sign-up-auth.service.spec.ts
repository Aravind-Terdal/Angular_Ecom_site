import { TestBed } from '@angular/core/testing';

import { SignUpAuthService } from './sign-up-auth.service';

describe('SignUpAuthService', () => {
  let service: SignUpAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
