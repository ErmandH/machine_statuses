import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

type Device = { id:string, name:string, unitNumber: number, data: string, settings:string }


@IonicPage()
@Component({
  selector: 'page-device-select',
  templateUrl: 'device-select.html',
})
export class DeviceSelectPage {
  resultText:string = ''
  devices: any[] = [];

  constructor(private ble: BLE,
    public viewCtrl: ViewController,
    public navCtrl:NavController, public alertCtrl: AlertController) {
     console.log("scan page open");
    //  this.devices = [{
    //   id: 'Device1',
    //   name: 'Device1',
    //   data: `$DATA_,1,408.2,2,20,6,10342.65,6524,12687,9765,11372,8976,70.5,1800.25,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1500,90,3500,675,*76,0x0D,0x0A`,
    //   settings:`$SETTING_,1.5,100,45,50000,6,60,1,1,1,1,1,1,1,0,0,0,0,0,0,4,1,1,1,1,1,54,8,65,200,200,200,200,200,200,1000,200,50000,200,200,200,200,200,60,*76`
    //  },
    //  {
    //   id: 'Device2',
    //   name: 'Device2',
    //   data: `$DATA_,1.5,816.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1600,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1500,90,3500,675,*77,0x0D,0x0A`,
    //   settings: `$SETTING_,1.5,100,45,50000,8,60,1,1,1,1,1,1,1,0,0,0,0,0,0,4,1,1,1,1,1,54,8,65,200,200,200,200,200,200,1000,200,50000,200,200,200,200,200,60,*76`
    //  },
    //  {
    //   id: 'Device3',
    //   name: 'Device3',
    //   data:`$DATA_,2,1224.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1560,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1500,90,3500,675,*78,0x0D,0x0A`,
    //   settings: `$SETTING_,1.5,100,45,50000,12,60,1,1,1,1,1,1,1,0,0,0,0,0,0,4,1,1,1,1,1,54,8,65,200,200,200,200,200,200,1000,200,50000,200,200,200,200,200,60,*76`
    //  },
    // ] 
    //this.scanForDevices();
  }

  

  selectDevice(device : Device ){
    // this.ble.startScan([])
    //   .subscribe(res=>{
    //     console.log(res);
    //     this.scannedContent=this.bytesToString(res.advertising);
    //     this.analyzeScannedData();
    //   });


    localStorage.setItem("bleDeviceId", device.id);
    localStorage.setItem('data', device.name)
    localStorage.setItem('settings', device.settings)
    this.navCtrl.setRoot(HomePage);
  }
  scanForDevices() {
    this.devices = []; // Clear the existing devices list
    this.resultText = `scan starting`;
    this.ble.scan([], 5).subscribe(
      device => {
        this.resultText = 'device scan success'
        this.devices.push(device);
      },
      error => {
        console.error('Error scanning for BLE devices', error);
        this.resultText = 'device scan failed: ' + error
      }
    );
  }

  // analyzeScannedData(scannedContent){
  //   let dataArray= scannedContent.split(',');
  //   if(dataArray[0]=='$DATA_'){

  //   }
  //   else if(dataArray[0]=='$CONN_'){
  //     console.log('Config file received!!!!');
  //   }
  //   else if(dataArray[0]=='$SETTING_'){
  //     console.log('Config file received!!!!');
  //   }
  // }

  //   // ASCII only
  // bytesToString(buffer) {
  //     return String.fromCharCode.apply(null, new Uint8Array(buffer));
  // }


  isDeviceExist(){
    if (localStorage.getItem("bleDeviceId"))
      return true;
    return false;
  }
  goBack(){
    this.navCtrl.setRoot(HomePage)
  }
}
