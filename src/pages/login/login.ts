import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { DeviceSelectPage } from '../device-select/device-select';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ToastController } from 'ionic-angular';
declare var window;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService, public screenOrientation: ScreenOrientation, public alertCtrl: AlertController, private platform: Platform) {
    translateService.use(localStorage.getItem('user-language'))
    
  }



  goHome(){
    const device= localStorage.getItem("bleDeviceId");
    if (device === null || device === undefined)
      this.navCtrl.setRoot(DeviceSelectPage);
    else
      this.navCtrl.setRoot(HomePage)
  }
}
