import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingStatisticsPage } from './working-statistics';

@NgModule({
  declarations: [
    WorkingStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingStatisticsPage),
  ],
})
export class WorkingStatisticsPageModule {}
