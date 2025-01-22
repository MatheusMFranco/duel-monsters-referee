import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly #languageKey = 'app_language';
  #defaultLanguage = 'pt';

  constructor() {}

  public getLanguage(): string {
    const language = localStorage.getItem(this.#languageKey);
    return language ? language : this.#defaultLanguage;
  }

  public setLanguage(language: string): void {
    localStorage.setItem(this.#languageKey, language);
  }

}
