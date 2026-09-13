import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  SelectedLanguage: Number = 0;
  messages: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) {}
}
