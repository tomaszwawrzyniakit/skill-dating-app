import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SkillTo } from '@less-code-challenge/api-interfaces';

import { SKILLS_PATH } from '@less-code-challenge/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SkillClientService {
  private readonly backendUri = environment.backendUri;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<SkillTo[]> {
    // return this.http.get<SkillTo[]>(`${this.backendUri}${SKILLS_PATH}`);
    return of([
      { id: '1', name: 'SQL', popularity: 100 },
      { id: '2', name: 'Project Management', popularity: 643 },
      { id: '3', name: 'Java', popularity: 564 },
    ]);
  }
}
