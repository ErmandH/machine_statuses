import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FertilizerCalibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fertilizer-calibration',
  templateUrl: 'fertilizer-calibration.html',
})
export class FertilizerCalibrationPage {
  tourCount=0;
  tab_index = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FertilizerCalibrationPage');
  }
  startTour(){
    this.tab_index = 1;
  }
  testSection(){
    this.tab_index = 2;
  }
  startTest(){
    this.tab_index = 3;
  }
  testOk(){
    this.tab_index = 4;
  }
  close(){
    this.viewCtrl.dismiss();
  }
  closeTest(){
    this.viewCtrl.dismiss();
    //this.tab_index = 0;
  }
}
