import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  first,
  filter,
  map,
  Observable,
  EMPTY,
} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  public cardName$: Observable<string> = EMPTY;

  constructor(private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    const PARAM_KEY = 'name';
    this.cardName$ = this.route.queryParams.pipe(
      first(),
      filter(params => !!params[PARAM_KEY]),
      map(params => params[PARAM_KEY])
    );
  }
}
