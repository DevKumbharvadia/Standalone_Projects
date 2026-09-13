import { Component, inject } from '@angular/core';
import { AppServiceService } from '../../Service/app-service.service';
import { EnglishService } from '../../Service/English/english.service';
import { GujaratiService } from '../../Service/Gujarati/gujarati.service';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {

  appServices = inject(AppServiceService);
  gujaratiService = inject(GujaratiService);

constructor() {
  this.gujaratiService.loadResearchData();
}

}
