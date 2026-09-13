import { Component, inject } from '@angular/core';
import { AppServiceService } from '../../Service/app-service.service';
import { GujaratiService } from '../../Service/Gujarati/gujarati.service';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.css',
})
export class ExtensionComponent {
  appServices = inject(AppServiceService);
  gujaratiService = inject(GujaratiService);

  constructor() {
    this.gujaratiService.loadExtensionData();
  }
}
