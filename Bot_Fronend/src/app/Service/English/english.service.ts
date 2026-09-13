import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppServiceService } from '../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class EnglishService {

  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}

  loadOptions() {
    this.appServices.messages = [
      this.sanitizer.bypassSecurityTrustHtml(
        `Choose Your Option <br>
         <button id="Admission-button" class="bg-blue-500 text-white px-3 m-1 mt-2 py-1 rounded">Admission</button>
         <button id="ExtensionEducation-button" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Extension Education</button>
         <button id="Research-button" class="bg-red-500 text-white px-3 m-1 py-1 rounded">Research</button>`
      )
    ];
  }

  loadColleges() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `Choose Your College <br>
         <button id="AIT" class="bg-blue-500 text-white px-3 m-1 mt-2 py-1 rounded">AIT</button>
         <button id="button-7" class="bg-green-500 text-white px-3 m-1 py-1 rounded">BACA</button>
         <button id="button-8" class="bg-yellow-500 text-white px-3 m-1 py-1 rounded">Horticulture</button>
         <button id="button-9" class="bg-red-500 text-white px-3 m-1 py-1 rounded">FPT</button>`
      )
    );
  }

  loadExtensionData() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Extension Education</h3>
         <iframe
           src="https://www.youtube.com/embed/3NeHmBg7cmA"
           title="Extension Education Video"
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
        `<h3 class="m-1">Research Paper</h3>
         <img src="https://placehold.co/800x800" alt="Research Image" class="rounded shadow-sm"/>
         <br>
         <a href="https://drive.google.com/file/d/1xYoiS9HjDJgyc9qAYN4lRT_DooEEmhPg/view?usp=drive_link" class="bg-blue-500 text-white px-3 py-1 rounded" download>
           Download Research Paper
         </a>`
      )
    );
  }

  loadAitData(){
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<a href="https://drive.google.com/file/d/1xYoiS9HjDJgyc9qAYN4lRT_DooEEmhPg/view?usp=drive_link" class="bg-blue-500 text-white px-3 py-1 rounded" download>
           Ait Data
         </a>`
      )
    );
  }

}
