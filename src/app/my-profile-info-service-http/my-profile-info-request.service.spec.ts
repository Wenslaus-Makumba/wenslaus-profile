import { TestBed } from '@angular/core/testing';

import { MyProfileInfoRequestService } from './my-profile-info-request.service';

describe('MyProfileInfoRequestService', () => {
  let service: MyProfileInfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProfileInfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
