import { Component, inject } from '@angular/core';
import { EnglishMainComponent } from "./English/english-main.component";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppServiceService } from './Service/app-service.service';
import { GujaratiMainComponent } from './Gujarati/gujarati-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EnglishMainComponent, GujaratiMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChatBot';
  appServices = inject(AppServiceService);

  ngAfterViewInit(): void {
    this.addEventListeners();
  }

  addEventListeners(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (event) => this.handleButtonClick(event));
    });
  }

  handleButtonClick(event: Event): void {
    const button = event.target as HTMLButtonElement;
    console.log(`Button clicked: ${button.id}`);

    if (button.id === 'LangEng') {
      this.appServices.SelectedLanguage = 1;
    } else if (button.id === 'LangGuj') {
      this.appServices.SelectedLanguage = 2;
    } else if (button.id === 'Back-Button'){
      this.appServices.messages.pop();
    }
  }
}
