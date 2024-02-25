import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SettingsPage } from "../pages/settings/settings";
import { TranslateService } from "@ngx-translate/core";
import { BLE } from "@ionic-native/ble";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{ title: string; component: any }>;
  machineStatusStrings = [
    "$DATA_,1,408.2,2,20,6,10342.65,6524,12687,9765,11372,8976,70.5,1800.25,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*76,0x0D,0x0A",
    "$DATA_,1.5,816.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1600,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*77,0x0D,0x0A",
    "$DATA_,2,1224.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1560,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*78,0x0D,0x0A",
    "$DATA_,2.5,1632.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*79,0x0D,0x0A",
    "$DATA_,3,2041,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*80,0x0D,0x0A",
    "$DATA_,3.5,2449.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,*81,0x0D,0x0A",
    "$DATA_,4,2857.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*82,0x0D,0x0A",
    "$DATA_,4.5,3265.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*83,0x0D,0x0A",
    "$DATA_,5,3673.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*84,0x0D,0x0A",
    "$DATA_,5.5,4082,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*85,0x0D,0x0A",
    "$DATA_,6,4490.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*86,0x0D,0x0A",
    "$DATA_,6.5,4898.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,*87,0x0D,0x0A",
    "$DATA_,7,5306.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*88,0x0D,0x0A",
    "$DATA_,7.5,5714.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*89,0x0D,0x0A",
    "$DATA_,7.5,6123,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*90,0x0D,0x0A",
    "$DATA_,7.5,6531.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*91,0x0D,0x0A",
    "$DATA_,7.5,6939.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*92,0x0D,0x0A",
    "$DATA_,7.5,7347.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*93,0x0D,0x0A",
    "$DATA_,7.5,7755.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*94,0x0D,0x0A",
    "$DATA_,7.5,8164,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*95,0x0D,0x0A",
    "$DATA_,7.5,8572.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*96,0x0D,0x0A",
    "$DATA_,7.5,8980.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*97,0x0D,0x0A",
    "$DATA_,7.5,9388.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*98,0x0D,0x0A",
    "$DATA_,7.5,9796.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*99,0x0D,0x0A",
    "$DATA_,7.5,10205,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*100,0x0D,0x0A",
    "$DATA_,7.5,10613.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*101,0x0D,0x0A",
    "$DATA_,7.5,11021.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*102,0x0D,0x0A",
    "$DATA_,7.5,11429.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*103,0x0D,0x0A",
    "$DATA_,7.5,11837.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*104,0x0D,0x0A",
    "$DATA_,7.5,12246,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*105,0x0D,0x0A",
    "$DATA_,7.5,12654.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*106,0x0D,0x0A",
    "$DATA_,7.5,13062.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,0,0,0,0,0,0,0,20,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*107,0x0D,0x0A",
    "$DATA_,7.5,13470.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*108,0x0D,0x0A",
    "$DATA_,7.5,13878.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,0,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*109,0x0D,0x0A",
    "$DATA_,7.5,14287,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,0,1,1,1,0,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*110,0x0D,0x0A",
    "$DATA_,7.5,14695.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,0,1,1,1,0,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*111,0x0D,0x0A",
    "$DATA_,7.5,15103.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,0,1,1,1,0,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*112,0x0D,0x0A",
    "$DATA_,7.5,15511.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,0,1,1,1,0,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,*113,0x0D,0x0A",
    "$DATA_,7.5,15919.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*114,0x0D,0x0A",
    "$DATA_,7.5,16328,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*115,0x0D,0x0A",
    "$DATA_,7.5,16736.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*116,0x0D,0x0A",
    "$DATA_,7.5,17144.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*117,0x0D,0x0A",
    "$DATA_,7.5,17552.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*118,0x0D,0x0A",
    "$DATA_,7.5,17960.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*119,0x0D,0x0A",
    "$DATA_,7.5,18369,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*120,0x0D,0x0A",
    "$DATA_,7.5,18777.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*121,0x0D,0x0A",
    "$DATA_,7.5,19185.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*122,0x0D,0x0A",
    "$DATA_,7.5,19593.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*123,0x0D,0x0A",
    "$DATA_,7.5,20001.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*124,0x0D,0x0A",
    "$DATA_,7.5,20410,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*125,0x0D,0x0A",
    "$DATA_,7.5,20818.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*126,0x0D,0x0A",
    "$DATA_,7.5,21226.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*127,0x0D,0x0A",
    "$DATA_,7.5,21634.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*128,0x0D,0x0A",
    "$DATA_,7.5,22042.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*129,0x0D,0x0A",
    "$DATA_,7.5,22451,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*130,0x0D,0x0A",
    "$DATA_,7.5,22859.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,*131,0x0D,0x0A",
    "$DATA_,7.5,23267.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*132,0x0D,0x0A",
    "$DATA_,7.5,23675.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*133,0x0D,0x0A",
    "$DATA_,7.5,24083.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*134,0x0D,0x0A",
    "$DATA_,7.5,24492,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,*135,0x0D,0x0A",
    "$DATA_,7.5,24900.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,1,0,1,0,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*136,0x0D,0x0A",
    "$DATA_,7.5,25308.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*137,0x0D,0x0A",
    "$DATA_,7.5,25716.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*138,0x0D,0x0A",
    "$DATA_,7.5,26124.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*139,0x0D,0x0A",
    "$DATA_,7.5,26533,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*140,0x0D,0x0A",
    "$DATA_,7.5,26941.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*141,0x0D,0x0A",
    "$DATA_,7.5,27349.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,0,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,*142,0x0D,0x0A",
    "$DATA_,7.5,27757.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,0,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*143,0x0D,0x0A",
    "$DATA_,7.5,28165.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*144,0x0D,0x0A",
    "$DATA_,7.5,28574,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*145,0x0D,0x0A",
    "$DATA_,7.5,28982.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*146,0x0D,0x0A",
    "$DATA_,7.5,29390.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,*147,0x0D,0x0A",
    "$DATA_,7.5,29798.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*148,0x0D,0x0A",
    "$DATA_,7.5,30206.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*149,0x0D,0x0A",
    "$DATA_,7.5,30615,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*150,0x0D,0x0A",
    "$DATA_,7.5,31023.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*151,0x0D,0x0A",
    "$DATA_,7.5,31431.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,0,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*152,0x0D,0x0A",
    "$DATA_,7.5,31839.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*153,0x0D,0x0A",
    "$DATA_,7.5,32247.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,*154,0x0D,0x0A",
    "$DATA_,7.5,32656,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,22,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,*155,0x0D,0x0A",
    "$DATA_,7.5,33064.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,*156,0x0D,0x0A",
    "$DATA_,7.5,33472.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,19.5,19.5,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,*157,0x0D,0x0A",
    "$DATA_,7.5,33880.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,19.5,19.5,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,*158,0x0D,0x0A",
    "$DATA_,7.5,34288.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*159,0x0D,0x0A",
    "$DATA_,7.5,34697,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*160,0x0D,0x0A",
    "$DATA_,7.5,35105.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,*161,0x0D,0x0A",
    "$DATA_,7.5,35513.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,*162,0x0D,0x0A",
    "$DATA_,7.5,35921.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,0,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*163,0x0D,0x0A",
    "$DATA_,7.5,36329.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,0,0,1,0,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*164,0x0D,0x0A",
    "$DATA_,7.5,36738,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*165,0x0D,0x0A",
    "$DATA_,7.5,37146.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*166,0x0D,0x0A",
    "$DATA_,7.5,37554.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,0,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*167,0x0D,0x0A",
    "$DATA_,7.5,37962.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*168,0x0D,0x0A",
    "$DATA_,6.5,38370.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*169,0x0D,0x0A",
    "$DATA_,5.5,38779,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*170,0x0D,0x0A",
    "$DATA_,4.5,39187.2,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*171,0x0D,0x0A",
    "$DATA_,3.5,39595.4,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,1500,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,16,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*172,0x0D,0x0A",
    "$DATA_,2.5,40003.6,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,0,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,18,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*173,0x0D,0x0A",
    "$DATA_,1.5,40411.8,2,18,6,10342.65,6524,12687,9765,11372,8976,70.5,0,1,1,1,1,1,1,0,0,0,0,0,0,19.5,19.5,19.5,19.5,19.5,19.5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,*174,0x0D,0x0A",
  ];
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private translate: TranslateService,
    private ble: BLE
  ) {
    //
    if (!localStorage.getItem("user-language")) {
      localStorage.setItem("user-language", "gb");
    }
    const language = localStorage.getItem("user-language");
    this.translate.use(language);
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: "home", component: HomePage },
      { title: "settings", component: SettingsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.ble.enable();
      // if(!localStorage.getItem("user-language")){
      //   localStorage.setItem("user-language","gb");
      // }
      // const language= localStorage.getItem("user-language");
      // this.translate.use(language);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title === "home") {
      this.nav.setRoot(page.component);
    } else {
      this.nav.push(page.component);
    }
  }
}
