import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'app-language-picker',
  // template: `<ion-select (ionChange)="changeLanguage($event.target.value)>
  // <ion-option value="tr">Türkçe</ion-option>
  // <ion-option value="en">English</ion-option>
  // </ion-select>`
  template:`<button round ion-button color="light" (click)="changeLanguage()">
  <ion-icon slot="start" class="fi fi-{{language}}"></ion-icon>
</button>`
})
export class LanguagePickerComponent {
  language:string;
  constructor(private translate: TranslateService,private actSheet:ActionSheetController) {
    if(!localStorage.getItem("user-language")){ 
      localStorage.setItem("user-language","gb");
    }
    this.language= localStorage.getItem("user-language");
    this.translate.use(this.language);
  }

  changeLanguage(language: string) {
    const actionSheet = this.actSheet.create({
      title: (this.translate.get("choose-language")[0]),
      buttons: [
        {
          text: 'Türkçe',
          handler: () => {
            this.language="tr";
            localStorage.setItem("user-language",this.language);
            this.translate.use(this.language);
          }
        },
        {
          text: 'English',
          handler: () => {
            this.language="gb";
            localStorage.setItem("user-language",this.language);
            this.translate.use(this.language);
          }
        }
      ]
    });
    actionSheet.present();
    // console.log(language);
    // this.translate.use(language);
  }
}