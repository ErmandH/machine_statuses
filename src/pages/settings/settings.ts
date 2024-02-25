import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, AlertController, IonicFormInput } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { HomePage } from '../home/home';
import { FertilizerCalibrationPage } from '../fertilizer-calibration/fertilizer-calibration';
import { SeedCalibrationPage } from '../seed-calibration/seed-calibration';
import { MachineSettings } from '../../models/MachineSettings';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { MachineStatus } from '../../models/MachineStatus';
import { SettingsGeneralComponent } from '../../components/settings-general/settings-general';
import { SettingsGeneralFertilizerComponent } from '../../components/settings-general-fertilizer/settings-general-fertilizer';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  machineSettings: MachineSettings;
  machineStatus: MachineStatus
  i_tab = 't1';
  focusDistanceBetweenSeeds: boolean = false;
  focusFertilizerWeight: boolean = false;
  @ViewChild(SettingsGeneralComponent) settingsGeneral : SettingsGeneralComponent;
  @ViewChild(SettingsGeneralFertilizerComponent) settingsFertilizer : SettingsGeneralFertilizerComponent;
  isGeneralSaveButtonDisabled = false;
  isFertilizerSaveButtonDisabled = false;
  segmentChanged(ev: any) {
    this.i_tab = ev.value;
  }
  constructor(public navCtrl: NavController, public params: NavParams,public modalCtrl: ModalController, public alertCtrl: AlertController, private elementRef: ElementRef) {
    this.machineSettings = loadMachineSettings()
    this.machineStatus = loadMachineStatuses()
    if (this.params.get('focusInput') === 'distanceBetweenSeedsInput'){
      this.focusDistanceBetweenSeeds = true;
    }
    if (this.params.get('focusInput') === 'fertilizerWeightInput'){
      this.focusFertilizerWeight = true;
    }
    
  }
  ngOnInit(){
    if (this.params.get('segment') === 't3'){
      this.i_tab = 't3';
    }
  }

  ngDoCheck() {
    if (this.settingsGeneral){
      this.settingsGeneral.isButtonDisabled().subscribe(value => {
        this.isGeneralSaveButtonDisabled = value;
      });
    }
    if (this.settingsFertilizer){
      this.settingsFertilizer.isButtonDisabled().subscribe(value => {
        this.isFertilizerSaveButtonDisabled = value;
      })
    }
  }
  submitGeneralSettings(){
    this.settingsGeneral.onFormSubmit()
  }
  submitFertilizerSettings(){
    this.settingsFertilizer.onFormSubmit()
  }

  goBack = () => this.navCtrl.setRoot(HomePage);

  openCalibrationModal = () => this.modalCtrl.create(FertilizerCalibrationPage).present();
  openSeedCalibrationModal = () => this.navCtrl.push(SeedCalibrationPage)
}
