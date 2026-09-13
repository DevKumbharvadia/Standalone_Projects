import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { EnglishService } from '../../Service/English/english.service';
import { AppServiceService } from '../../Service/app-service.service';
import { AITComponent } from './ait/ait.component';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [AITComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {
  appServices = inject(AppServiceService);
  englishService = inject(EnglishService);
  zone = inject(NgZone);
  cdRef = inject(ChangeDetectorRef);

  ShowAIT = 0;

  constructor() {
    this.englishService.loadColleges();
  }

  ngAfterViewInit(): void {
    this.attachDelegatedClickListener();
  }

  attachDelegatedClickListener(): void {
    document.body.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'BUTTON') {
        this.zone.run(() => {  // Ensures Angular detects the change
          this.handleButtonClick(target.id);
          this.cdRef.detectChanges();  // Manually trigger change detection
        });
      }
    });
  }

  handleButtonClick(buttonId: string): void {
    console.log(buttonId);

    switch (buttonId) {
      case 'AIT':
        this.ShowAIT = 1;
        console.log("AIT button clicked, ShowAIT:", this.ShowAIT);
        break;
      default:
        console.log('Other button clicked');
        break;
    }
  }
}
