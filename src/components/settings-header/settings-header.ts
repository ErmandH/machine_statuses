import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
import { SettingsTabOnePage } from "../../pages/settings-tab-one/settings-tab-one";
import { SettingsTabTwoPage } from "../../pages/settings-tab-two/settings-tab-two";
import { SettingsTabThreePage } from "../../pages/settings-tab-three/settings-tab-three";
import { SettingsTabFourPage } from "../../pages/settings-tab-four/settings-tab-four";
import { HomePage } from "../../pages/home/home";
import { MachineSettings } from "../../models/MachineSettings";
import { MachineStatus } from "../../models/MachineStatus";

/**
 * Generated class for the SettingsHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "settings-header",
  templateUrl: "settings-header.html",
})
export class SettingsHeaderComponent {
  @Input() segment: string;
  machineSettings: MachineSettings;
  machineStatus: MachineStatus;
  constructor(private navCtrl: NavController) {}
  goToTabOne = () =>
    this.navCtrl.setRoot(SettingsTabOnePage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabTwo = () =>
    this.navCtrl.setRoot(SettingsTabTwoPage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabThree = () =>
    this.navCtrl.setRoot(SettingsTabThreePage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goToTabFour = () =>
    this.navCtrl.setRoot(SettingsTabFourPage, {
      machineSettings: this.machineSettings,
      machineStatus: this.machineStatus,
    });
  goBack = () => this.navCtrl.setRoot(HomePage);
}
