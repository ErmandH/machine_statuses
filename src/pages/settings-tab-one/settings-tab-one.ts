import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MachineSettings } from '../../models/MachineSettings';
import { SettingsGeneralComponent } from '../../components/settings-general/settings-general';
import { MachineStatus } from '../../models/MachineStatus';
import { FertilizerCalibrationPage } from '../fertilizer-calibration/fertilizer-calibration';
import { SeedCalibrationPage } from '../seed-calibration/seed-calibration';
import { SettingsTabTwoPage } from '../settings-tab-two/settings-tab-two';
import { SettingsTabThreePage } from '../settings-tab-three/settings-tab-three';
import { SettingsTabFourPage } from '../settings-tab-four/settings-tab-four';
import { HomePage } from '../home/home';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { FertilizerPasswordModalPage } from '../fertilizer-password-modal/fertilizer-password-modal';



@Component({
  selector: 'page-settings-tab-one',
  templateUrl: 'settings-tab-one.html',
})
export class SettingsTabOnePage {
  focusDistanceBetweenSeeds: boolean = false;
  focusFertilizerWeight: boolean = false;
  focusDistanceBetweenUnits: boolean = false;
  machineStatus: MachineStatus
  machineSettings: MachineSettings;
  @ViewChild(SettingsGeneralComponent) settingsGeneralComponent: SettingsGeneralComponent;
  isButtonDisabled = true;

  constructor(public navCtrl: NavController, public params: NavParams,public modalCtrl: ModalController) {
    this.machineSettings = loadMachineSettings()
    this.machineStatus = loadMachineStatuses()
    if (this.params.get('focusInput') === 'distanceBetweenSeedsInput'){
      this.focusDistanceBetweenSeeds = true;
    }
    if (this.params.get('focusInput') === 'distanceBetweenUnitsInput'){
      this.focusDistanceBetweenUnits = true;
    }
    if (this.params.get('focusInput') === 'fertilizerWeightInput'){
      this.focusFertilizerWeight = true;
    }
  }

  submitGeneralSettings(){
    this.settingsGeneralComponent.onFormSubmit();
  }

  ngAfterViewInit() {
    this.settingsGeneralComponent.isButtonDisabled().subscribe( value => {
      this.isButtonDisabled = value
    })
  }
  openCalibrationModal = () => this.modalCtrl.create(FertilizerCalibrationPage).present();
  openSeedCalibrationModal = () => this.navCtrl.push(SeedCalibrationPage)


  // navigation
  goToTabOne = () => {}
  goToTabTwo = () =>
    this.navCtrl.push(FertilizerPasswordModalPage);
  goToTabThree = () =>
    this.navCtrl.setRoot(SettingsTabThreePage);
  goToTabFour = () =>
    this.navCtrl.setRoot(SettingsTabFourPage);
  goBack = () => this.navCtrl.setRoot(HomePage);
}
