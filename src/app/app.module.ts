import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './moment.pipe';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { Injectable } from "@angular/core";
// import { HammerGestureConfig,HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from './services/admobfree.service';




@NgModule({
  declarations: [AppComponent, MomentPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicSwipeAllModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    AdMobFree,
    AdmobFreeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    OneSignal,
    Toast,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
