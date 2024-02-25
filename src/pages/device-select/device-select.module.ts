import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceSelectPage } from './device-select';

@NgModule({
  declarations: [
    DeviceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceSelectPage),
  ],
})
export class DeviceSelectPageModule {}
