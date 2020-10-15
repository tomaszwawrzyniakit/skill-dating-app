import { Component } from '@angular/core';
import { SkillTo, RecentSearchTo } from '@less-code-challenge/api-interfaces';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'sd-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss'],
})
export class HomeDialogComponent {
  skills: SkillTo[];
  searches: RecentSearchTo[];
  constructor(activatedRoute : ActivatedRoute ) {
    this.skills = activatedRoute.snapshot.data.skills;
    this.searches = activatedRoute.snapshot.data.searches;
  }
}
