import { Component, Input } from '@angular/core';
import { MachineSettings } from '../../models/MachineSettings';
import { MachineStatus, Machines } from '../../models/MachineStatus';
import loadMachineSettings from '../../utils/loadMachineSettings';
import { loadMachineStatuses } from '../../utils/loadMachineStatus';
import { getSettingsArray } from '../../utils/getDataArray';

/**
 * Generated class for the SettingsRowEnableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings-row-enable',
  templateUrl: 'settings-row-enable.html'
})
export class SettingsRowEnableComponent {
  machinesettings: MachineSettings;
  machinestatus: MachineStatus;

  ngOnInit(){
    this.machinesettings = loadMachineSettings();
    this.machinestatus = loadMachineStatuses();
    console.log(getSettingsArray())
  }

  onToggleChange(event: any, machine: Machines,machineIndex: number) {
    const settingsData = localStorage.getItem('settings').split(',')
    settingsData[8 + machineIndex] = event.checked ? '1' : '0'
    const settingsString = settingsData.join(',')
    localStorage.setItem('settings', settingsString)
    machine.show = event.checked
  }

}
