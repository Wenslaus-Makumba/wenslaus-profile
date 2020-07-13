import { TestBed } from '@angular/core/testing';

import { SearchedProfileInfoRequestService } from './searched-profile-info-request.service';

describe('SearchedProfileInfoRequestService', () => {
  let service: SearchedProfileInfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedProfileInfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
