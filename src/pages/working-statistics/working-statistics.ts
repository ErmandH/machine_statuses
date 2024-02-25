import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MachineStatus } from '../../models/MachineStatus';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the WorkingStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-working-statistics',
  templateUrl: 'working-statistics.html',
})
export class WorkingStatisticsPage {

  machineStatus: MachineStatus
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public translate: TranslateService) {
    this.machineStatus = loadMachineStatuses()
  }

  goBack(){
    this.navCtrl.pop()
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: this.translate.instant('working-statistics.title'),
      subTitle: this.translate.instant('working-statistics.message'),
      cssClass:'area-reset-alert',
      buttons: [
        {
          text:this.translate.instant('ok'),
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

}
