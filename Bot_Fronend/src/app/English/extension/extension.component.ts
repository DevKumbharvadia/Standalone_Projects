import { Component, inject } from '@angular/core';
import { AppServiceService } from '../../Service/app-service.service';
import { EnglishService } from '../../Service/English/english.service';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.css',
})
export class ExtensionComponent {
  appServices = inject(AppServiceService);
  englishService = inject(EnglishService);

  constructor() {
    this.englishService.loadExtensionData();
  }
}
