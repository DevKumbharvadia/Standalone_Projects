import { Injectable } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GujaratiService {
  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}
  
  loadOptions() {
    this.appServices.messages = [
      this.sanitizer.bypassSecurityTrustHtml(
        `તમારો વિકલ્પ પસંદ કરો <br>
         <button id="Admission-button" class="bg-blue-500 text-white px-3 m-1 mt-2 py-1 rounded">પ્રવેશ</button>
         <button id="ExtensionEducation-button" class="bg-green-500 text-white px-3 m-1 py-1 rounded">વિસ્તાર શિક્ષણ</button>
         <button id="Research-button" class="bg-red-500 text-white px-3 m-1 py-1 rounded">શોધ</button>`
      )
    ];
  }
  
  loadColleges() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `તમારા કોલેજનો વિકલ્પ પસંદ કરો <br>
         <button id="AIT" class="bg-blue-500 text-white px-3 m-1 mt-2 py-1 rounded">એઆઈટી</button>
         <button id="button-7" class="bg-green-500 text-white px-3 m-1 py-1 rounded">બીઆસીએ</button>
         <button id="button-8" class="bg-yellow-500 text-white px-3 m-1 py-1 rounded">હૉર્ટીકલ્ચર</button>
         <button id="button-9" class="bg-red-500 text-white px-3 m-1 py-1 rounded">એફપીટી</button>`
      )
    );
  }
  
  loadExtensionData() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">વિસ્તાર શિક્ષણ</h3>
         <iframe
           src="https://www.youtube.com/embed/3NeHmBg7cmA"
           title="વિસ્તાર શિક્ષણ વિડિઓ"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
         </iframe>`
      )
    );
  }
  
  loadResearchData() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">શોધ પેપર</h3>
         <img src="https://placehold.co/800x800" alt="શોધ ચિત્ર" class="rounded shadow-sm"/>
         <br>
         <a href="https://drive.google.com/file/d/1xYoiS9HjDJgyc9qAYN4lRT_DooEEmhPg/view?usp=drive_link" class="bg-blue-500 text-white px-3 py-1 rounded" download>
           શોધ પેપર ડાઉનલોડ કરો
         </a>`
      )
    );
  }
  
  loadAitData(){
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<a href="https://drive.google.com/file/d/1xYoiS9HjDJgyc9qAYN4lRT_DooEEmhPg/view?usp=drive_link" class="bg-blue-500 text-white px-3 py-1 rounded" download>
           એઆઈટી ડેટા
         </a>`
      )
    );
  }
  
}
