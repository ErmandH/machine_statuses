import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { FertilizerCalibrationPage } from '../pages/fertilizer-calibration/fertilizer-calibration';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BLE } from '@ionic-native/ble';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LanguagePickerComponent } from '../components/language-picker.component';
import { DeviceSelectPage } from '../pages/device-select/device-select';
import { AreaInfoPage } from '../pages/area-info/area-info';
import { WorkingStatisticsPage } from '../pages/working-statistics/working-statistics';
import { SeedCalibrationPage } from '../pages/seed-calibration/seed-calibration';
import { TooltipsModule, TooltipController } from 'ionic-tooltips';
import { SettingsGeneralComponent } from '../components/settings-general/settings-general';
import { SettingsGeneralFertilizerComponent } from '../components/settings-general-fertilizer/settings-general-fertilizer';
import { SettingsRowEnableComponent } from '../components/settings-row-enable/settings-row-enable';
import { SettingsGranularMotorComponent } from '../components/settings-granular-motor/settings-granular-motor';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { PipesModule } from '../pipes/pipes.module';
import { SettingsTabOnePage } from '../pages/settings-tab-one/settings-tab-one';
import { SettingsHeaderComponent } from '../components/settings-header/settings-header';
import { SettingsTabTwoPage } from '../pages/settings-tab-two/settings-tab-two';
import { SettingsTabThreePage } from '../pages/settings-tab-three/settings-tab-three';
import { SettingsTabFourPage } from '../pages/settings-tab-four/settings-tab-four';
import { HomeButtonsPopoverComponent } from '../components/home-buttons-popover/home-buttons-popover';
import { FertilizerPasswordModalPage } from '../pages/fertilizer-password-modal/fertilizer-password-modal';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LanguagePickerComponent,
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    FertilizerCalibrationPage,
    DeviceSelectPage,
    AreaInfoPage,
    WorkingStatisticsPage,
    SeedCalibrationPage,
    SettingsGeneralComponent,
    SettingsGeneralFertilizerComponent,
    SettingsRowEnableComponent,
    SettingsGranularMotorComponent,
    SettingsTabOnePage,
    SettingsTabTwoPage,
    SettingsTabThreePage,
    SettingsTabFourPage,
    SettingsHeaderComponent,
    HomeButtonsPopoverComponent,
    FertilizerPasswordModalPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    TooltipsModule,
  ],
  bootstrap: [IonicApp],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    FertilizerCalibrationPage,
    DeviceSelectPage,
    AreaInfoPage,
    WorkingStatisticsPage,
    SeedCalibrationPage,
    SettingsTabOnePage,
    SettingsTabTwoPage,
    SettingsTabThreePage,
    SettingsTabFourPage,
    HomeButtonsPopoverComponent,
    FertilizerPasswordModalPage
  ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TooltipController,
    ScreenOrientation
  ]
})
export class AppModule {}
