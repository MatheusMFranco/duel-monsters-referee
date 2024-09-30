import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'dmr-anonymous-template',
  templateUrl: './anonymous-template.component.html',
  styleUrls: ['./anonymous-template.component.scss'],
})
export class AnonymousTemplateComponent {

  @Input()
  public title!: string;

  @Input()
  public hasTransition = false;

  constructor() { }

}
