import { Component, Input } from '@angular/core';
import { MachineSettings, Motor } from '../../models/MachineSettings';
import getNumberOfUnit from '../../utils/getNumberOfUnit';
import loadMachineSettings from '../../utils/loadMachineSettings';

/**
 * Generated class for the SettingsGranularMotorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings-granular-motor',
  templateUrl: 'settings-granular-motor.html'
})
export class SettingsGranularMotorComponent {
  settings:MachineSettings;

  ngOnInit(){
    this.settings = loadMachineSettings()
  }

  onToggleChange(event: any, motor:Motor,motorIndex: number) {
    const settingsData = localStorage.getItem('settings').split(',')
    settingsData[21 + motorIndex] = event.checked ? '1' : '0'
    const settingsString = settingsData.join(',')
    localStorage.setItem('settings', settingsString)
    motor.enabled = event.checked
  }
}
