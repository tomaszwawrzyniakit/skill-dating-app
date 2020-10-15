import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UserProfileTo } from '@less-code-challenge/api-interfaces';

import { SkillClientService } from '../skill.client';
@Injectable({ providedIn: 'root' })
export class EditProfileResolverService implements Resolve<Observable<UserProfileTo>> {
  constructor(private readonly skillClientService: SkillClientService) {}

  resolve(): Observable<UserProfileTo> {
    // return this.skillClientService.findAll();
    return null;
  }
}
