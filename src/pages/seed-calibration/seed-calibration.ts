import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-seed-calibration',
  templateUrl: 'seed-calibration.html',
})
export class SeedCalibrationPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public translate: TranslateService) {

  }

  goBack(){
    this.navCtrl.pop()
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title:     this.translate.instant('seed-calibration-page.row-reset.title'),
      subTitle: this.translate.instant('seed-calibration-page.row-reset.description'),
      cssClass:'row-reset-alert',
      buttons: [
        {
          text:    this.translate.instant('seed-calibration-page.ok'),
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }
}
