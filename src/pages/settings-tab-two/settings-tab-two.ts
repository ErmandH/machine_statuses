import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MachineSettings } from '../../models/MachineSettings';
import { SettingsGeneralFertilizerComponent } from '../../components/settings-general-fertilizer/settings-general-fertilizer';
import { MachineStatus } from '../../models/MachineStatus';
import { SettingsTabOnePage } from '../settings-tab-one/settings-tab-one';
import { SettingsTabThreePage } from '../settings-tab-three/settings-tab-three';
import { SettingsTabFourPage } from '../settings-tab-four/settings-tab-four';
import { HomePage } from '../home/home';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { TranslateService } from '@ngx-translate/core';
import { FertilizerPasswordModalPage } from '../fertilizer-password-modal/fertilizer-password-modal';

/**
 * Generated class for the SettingsTabTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings-tab-two',
  templateUrl: 'settings-tab-two.html',
})
export class SettingsTabTwoPage {
  machineStatus: MachineStatus
  machineSettings: MachineSettings;
  @ViewChild(SettingsGeneralFertilizerComponent) settingsFertilizer : SettingsGeneralFertilizerComponent;
  isGeneralSaveButtonDisabled = false;
  isFertilizerSaveButtonDisabled = false;
  
  constructor(public navCtrl: NavController, public params: NavParams, public alertCtrl: AlertController, public translate: TranslateService, public modalCtrl: ModalController) {
    this.machineSettings = loadMachineSettings()
    this.machineStatus = loadMachineStatuses()
    console.log('test')

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: this.translate.instant('settings.general-fertilizer.title'),
      subTitle: this.translate.instant('settings.general-fertilizer.message'),
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

  ngAfterViewInit(){
    this.settingsFertilizer.isButtonDisabled().subscribe(value => {
      this.isFertilizerSaveButtonDisabled = value;
    })
  }
  submitFertilizerSettings(){
    this.settingsFertilizer.onFormSubmit()
  }

  // navigation
  goToTabOne = () =>
    this.navCtrl.setRoot(SettingsTabOnePage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabTwo = () => {}
  goToTabThree = () =>
    this.navCtrl.setRoot(SettingsTabThreePage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabFour = () =>
    this.navCtrl.setRoot(SettingsTabFourPage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goBack = () => this.navCtrl.setRoot(HomePage);
}
