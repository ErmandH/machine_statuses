import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MachineStatus } from '../../models/MachineStatus';
import { MachineSettings } from '../../models/MachineSettings';
import { FertilizerCalibrationPage } from '../fertilizer-calibration/fertilizer-calibration';
import { SeedCalibrationPage } from '../seed-calibration/seed-calibration';
import { SettingsTabOnePage } from '../settings-tab-one/settings-tab-one';
import { SettingsTabTwoPage } from '../settings-tab-two/settings-tab-two';
import { SettingsTabFourPage } from '../settings-tab-four/settings-tab-four';
import { HomePage } from '../home/home';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { FertilizerPasswordModalPage } from '../fertilizer-password-modal/fertilizer-password-modal';


@Component({
  selector: 'page-settings-tab-three',
  templateUrl: 'settings-tab-three.html',
})
export class SettingsTabThreePage {
  machineStatus: MachineStatus
  machineSettings: MachineSettings;
  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController) {
    this.machineSettings = loadMachineSettings()
    this.machineStatus = loadMachineStatuses()
  }

  openCalibrationModal = () => this.modalCtrl.create(FertilizerCalibrationPage).present();
  openSeedCalibrationModal = () => this.navCtrl.push(SeedCalibrationPage)

  // navigation
  goToTabOne = () =>
    this.navCtrl.setRoot(SettingsTabOnePage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabTwo = () => this.navCtrl.push(FertilizerPasswordModalPage);
  goToTabThree = () => {}
  goToTabFour = () =>
    this.navCtrl.setRoot(SettingsTabFourPage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goBack = () => this.navCtrl.setRoot(HomePage);
}
