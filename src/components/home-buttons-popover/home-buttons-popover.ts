import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/umd/navigation/view-controller';
import { DeviceSelectPage } from '../../pages/device-select/device-select';

/**
 * Generated class for the HomeButtonsPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-buttons-popover',
  templateUrl: 'home-buttons-popover.html'
})
export class HomeButtonsPopoverComponent {
  sound: string;
  openCloseSound: () => void;
  constructor(public params: NavParams, public navCtrl: NavController) {
    this.sound = this.params.get('sound')
    this.openCloseSound = this.params.get('openCloseSound')
  }
}
