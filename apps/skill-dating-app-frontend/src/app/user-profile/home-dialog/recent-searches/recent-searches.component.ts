import { Component, Input } from '@angular/core';
import { SkillTo } from '@less-code-challenge/api-interfaces';

@Component({
  selector: 'sd-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
})
export class RecentSearchesComponent {
  @Input()
  searches: SkillTo[];
}
