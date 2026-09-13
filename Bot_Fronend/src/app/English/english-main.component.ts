import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { AppServiceService } from '../Service/app-service.service';
import { EnglishService } from '../Service/English/english.service';
import { AdmissionComponent } from "./admission/admission.component";
import { ExtensionComponent } from './extension/extension.component';
import { ResearchComponent } from './research/research.component';

@Component({
  selector: 'app-english-main',
  standalone: true,
  imports: [AdmissionComponent, ExtensionComponent, ResearchComponent],
  templateUrl: './english-main.component.html',
  styleUrl: './english-main.component.css'
})
export class EnglishMainComponent {

  appServices = inject(AppServiceService);
  englishService = inject(EnglishService);
  zone = inject(NgZone);
  cdRef = inject(ChangeDetectorRef);

  ShowAdmissions = 0;
  ShowExtensionEducation = 0;
  ShowResearch = 0;

  constructor() {
    this.englishService.loadOptions();
  }

  ngAfterViewInit(): void {
    this.attachDelegatedClickListener();
  }

  attachDelegatedClickListener(): void {
    document.body.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'BUTTON') {
        this.zone.run(() => {
          this.handleButtonClick(target.id);
          this.cdRef.detectChanges();
        });
      }
    });
  }

  handleButtonClick(buttonId: string): void {
    console.log(buttonId);

    switch (buttonId) {
      case 'Admission-button':
        this.ShowAdmissions = 1;
        this.ShowExtensionEducation = 0;
        this.ShowResearch = 0;
        break;
      case 'ExtensionEducation-button':
        this.ShowAdmissions = 0;
        this.ShowExtensionEducation = 1;
        this.ShowResearch = 0;
        break;
      case 'Research-button':
        this.ShowAdmissions = 0;
        this.ShowExtensionEducation = 0;
        this.ShowResearch = 1;
        break;
      default:
        console.log('Other button clicked');
        break;
    }
  }

}
