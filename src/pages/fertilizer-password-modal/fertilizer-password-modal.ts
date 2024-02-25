import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsTabTwoPage } from '../settings-tab-two/settings-tab-two';

/**
 * Generated class for the FertilizerPasswordModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fertilizer-password-modal',
  templateUrl: 'fertilizer-password-modal.html',
})
export class FertilizerPasswordModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop()
  }

  goToSettingsTabTwo(){
    this.navCtrl.setRoot(SettingsTabTwoPage);
  }
}
