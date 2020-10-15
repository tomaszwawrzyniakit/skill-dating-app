import { Component, Input } from '@angular/core';
import { SkillTo } from '@less-code-challenge/api-interfaces';

@Component({
  selector: 'sd-popular-skills',
  templateUrl: './popular-skills.component.html',
  styleUrls: ['./popular-skills.component.scss'],
})
export class PopularSkillsComponent {
  @Input()
  skills: SkillTo[];
}
