import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LanguageService } from '../shared/services/language.service';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  constructor(
    private readonly http: HttpClient,
    private readonly language: LanguageService,
) {}

  public getCardInfo(cardName: string): Observable<Card> {
    const url = `${environment.api}?name=${encodeURIComponent(cardName)}&language=${this.language.getLanguage()}`;
    return this.http.get<any>(url).pipe(
        map(({data}) => data[0])
    );
  }
}
