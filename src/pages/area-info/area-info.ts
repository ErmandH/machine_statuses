import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MachineStatus } from '../../models/MachineStatus';
import { TranslateService } from '@ngx-translate/core';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';


/**
 * Generated class for the AreaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-area-info',
  templateUrl: 'area-info.html',
})
export class AreaInfoPage {

  machineStatus: MachineStatus
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public translate: TranslateService) {
    this.machineStatus = loadMachineStatuses()
  }

  goBack(){
    this.navCtrl.pop()
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: this.translate.instant('area-info.title'),
      subTitle: this.translate.instant('area-info.message'),
      cssClass:'area-reset-alert',
      buttons: [
        {
          text:this.translate.instant('area-info.ok'),
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

}
