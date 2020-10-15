import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UserProfileTo } from '@less-code-challenge/api-interfaces';

import { ProfileClientService } from './profile.client';

@Injectable({ providedIn: 'root' })
export class ProfileResolverService implements Resolve<Observable<UserProfileTo>> {
  constructor(private readonly profileClientService: ProfileClientService) {}

  resolve(): Observable<UserProfileTo> {
    return this.profileClientService.findOne(1);
  }
}
