import { Component, inject } from '@angular/core';
import { EnglishService } from '../../../Service/English/english.service';
import { AppServiceService } from '../../../Service/app-service.service';

@Component({
  selector: 'app-ait',
  standalone: true,
  imports: [],
  templateUrl: './ait.component.html',
  styleUrl: './ait.component.css'
})
export class AITComponent {

  appServices = inject(AppServiceService);
  englishService = inject(EnglishService);



constructor() {
  this.englishService.loadAitData();
}

}
