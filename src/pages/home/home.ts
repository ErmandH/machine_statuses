import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicFormInput, Modal, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import {Machines, MachineStatus} from '../../models/MachineStatus';
import { BLE } from '@ionic-native/ble';
import { SettingsPage } from '../settings/settings';
import { DeviceSelectPage } from '../device-select/device-select';
import { AreaInfoPage } from '../area-info/area-info';
import { WorkingStatisticsPage } from '../working-statistics/working-statistics';
import { LoginPage } from '../login/login';
import { MachineSettings } from '../../models/MachineSettings';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { JsonPipe } from '@angular/common';
import getNumberOfUnit from '../../utils/getNumberOfUnit';
import isMotorsDisabled from '../../utils/isMotorsDisabled';
import { SettingsTabOnePage } from '../settings-tab-one/settings-tab-one';
import { SettingsTabThreePage } from '../settings-tab-three/settings-tab-three';
import { HomeButtonsPopoverComponent } from '../../components/home-buttons-popover/home-buttons-popover';
import { getDataArray, getSettingsArray } from '../../utils/getDataArray';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  speed="0";
  machineStatusStrings=[];
  configString='$CONN_ ,1,1,6,6,2,1,5,1,0,0,1,2,*76,0x0D,0x0A';
  machineSettingsString : string;
  machineSettings: MachineSettings = null;
  machines=[];
  machineStatus:MachineStatus = null;
  scannedContent:string='';
  index=0;
  isHasSound=true;
  sound="volume-up";
  device: string = null;
  maxDeviceCount=0;
  selectModal:Modal;
  constructor(public navCtrl: NavController,public ble:BLE,public modalCtrl: ModalController, public params: NavParams, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {//,public ble:BLE
    if (isMotorsDisabled()){
      this.alertCtrl.create({
        title: 'WARNING!',
        message: 'One or more motors are disabled',
        buttons: ['OK']
      }).present()
    }
   this.machineStatus = loadMachineStatuses();
   if (localStorage.getItem("bleDeviceId")){
   setInterval(function(){
    // read data from a characteristic, do something with output data
this.ble.read(localStorage.getItem("bleDeviceId"), null, null,
  function(data){
    localStorage.setItem('data',this.bytesToString(data));
    
  },
  function(failure){
    this.alertCtrl.create({
      title: 'We got an error while reading data!Please share this with developer',
      message: failure.toString(),
      buttons: ['OK']
    }).present()
  }
);
   },1000);
   }
  


    //this.loadMachineStatuses(localStorage.getItem('data').split(','));
    this.machineSettings = loadMachineSettings();
  }
  changeDevice(){
    this.navCtrl.setRoot(DeviceSelectPage)
  }
  successScan(res:any){
    // this.loadMachineStatuses();
    console.log(res);
  }
  failScan(res:any){
    console.log(res);
  }
  openSettings(){
      this.navCtrl.push(SettingsTabOnePage, { machineSettings: this.machineSettings, machineStatus: this.machineStatus });
  }
  // loadMachineStatuses(dataArray: string[]){
  //   this.machineStatus=new MachineStatus();
  //   this.machineStatus.machines=new Array<Machines>();
  //   this.machineStatus.speed=dataArray[1];
  //   this.machineStatus.seedArea=dataArray[2];
  //   this.machineStatus.seedUnit=dataArray[3]=="1"?"da":dataArray[3]=="2"?"ha":"";
  //   this.machineStatus.extraOrdinaryDistanceAvg=dataArray[4];
  //   this.machineStatus.seedPerAreaAvg=dataArray[5];
  //   this.machineStatus.totalCalculatedArea = dataArray[6];
  //   this.machineStatus.partial1 = dataArray[7];
  //   this.machineStatus.partial2 = dataArray[8];
  //   this.machineStatus.partial3 = dataArray[9];
  //   this.machineStatus.partial4 = dataArray[10];
  //   this.machineStatus.partial5 = dataArray[11];
  //   this.machineStatus.totalDistance = dataArray[51]
  //   this.machineStatus.distance = dataArray[52]
  //   this.machineStatus.totalWorkingTime = dataArray[53]
  //   this.machineStatus.workingTime = dataArray[54]
  //   this.machineStatus.vacuum=dataArray[12];
  //   this.machineStatus.fertilizerPerUnit=dataArray[13];
  //   this.machineStatus.machines=new Array<Machines>();
  //   this.machineStatus.loadMachineStatus = this.loadMachineStatuses
  //   for(var i=0; i< getNumberOfUnit(); i++){
  //     this.machineStatus.machines.push(new Machines(i+1,dataArray[14+i]=="0"?"#fff":dataArray[38+i]=="1"?"#eb3232":"#0bac0b",dataArray[26+i],"cm",true));
  //   }
  //   // this.index=this.index+1;
  //   // if(this.index==this.machineStatusStrings.length){
  //   //   this.index=0;
  //   // }
  //   return this.machineStatus
  // }

  // analyzeScannedData(){
  //   let dataArray=this.scannedContent.split(',');
  //   if(dataArray[0]=='$DATA_'){
  //     this.loadMachineStatuses(dataArray);
  //   }
  //   else if(dataArray[0]=='$CONN_'){
  //     alert('Config file received!!!!');
  //   }
  //   else if(dataArray[0]=='$SETTING_'){
  //     alert('Config file received!!!!');
  //   }
  // }

    // ASCII only
  bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
  openCloseSound(){
    if(this.isHasSound){
      this.isHasSound=false;
      this.sound="volume-off";
    }
    else{
      this.isHasSound=true;
      this.sound="volume-up";
    }
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(HomeButtonsPopoverComponent, { openCloseSound: this.openCloseSound, sound: this.sound, changeDevice: this.changeDevice });
    popover.present({
      ev: myEvent
    });
  }

  //navigation
  goToAreaInfo = () => this.navCtrl.push(AreaInfoPage, { machineStatus: this.machineStatus })
  goToWorkingStatistics = () => this.navCtrl.push(WorkingStatisticsPage,  { machineStatus: this.machineStatus })
  goToRowEnableDisable = () => this.navCtrl.push(SettingsTabThreePage, { machineSettings: this.machineSettings, machineStatus: this.machineStatus })
  goToDistanceBetweenSeeds = () => this.navCtrl.push(SettingsTabOnePage, { focusInput: 'distanceBetweenSeedsInput', machineSettings: this.machineSettings, machineStatus: this.machineStatus })
  goToDistanceBetweenUnits = () => this.navCtrl.push(SettingsTabOnePage, { focusInput: 'distanceBetweenUnitsInput', machineSettings: this.machineSettings, machineStatus: this.machineStatus })
  
  goToFertilizerWeight = () => this.navCtrl.push(SettingsTabOnePage, { focusInput: 'fertilizerWeightInput', machineSettings: this.machineSettings, machineStatus: this.machineStatus })

  logOut = () => this.navCtrl.push(LoginPage)
}
