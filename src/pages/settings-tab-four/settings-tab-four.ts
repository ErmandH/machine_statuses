import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MachineStatus } from '../../models/MachineStatus';
import { MachineSettings } from '../../models/MachineSettings';
import { FertilizerCalibrationPage } from '../fertilizer-calibration/fertilizer-calibration';
import { SeedCalibrationPage } from '../seed-calibration/seed-calibration';
import { SettingsTabOnePage } from '../settings-tab-one/settings-tab-one';
import { SettingsTabTwoPage } from '../settings-tab-two/settings-tab-two';
import { SettingsTabThreePage } from '../settings-tab-three/settings-tab-three';
import { HomePage } from '../home/home';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { FertilizerPasswordModalPage } from '../fertilizer-password-modal/fertilizer-password-modal';

/**
 * Generated class for the SettingsTabFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings-tab-four',
  templateUrl: 'settings-tab-four.html',
})
export class SettingsTabFourPage {
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
    this.navCtrl.setRoot(SettingsTabOnePage);
  goToTabTwo = () =>
    this.navCtrl.push(FertilizerPasswordModalPage);
  goToTabThree = () =>
    this.navCtrl.setRoot(SettingsTabThreePage);
  goToTabFour = () => {}
  goBack = () => this.navCtrl.setRoot(HomePage);
}
