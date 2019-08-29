import { Component, ViewChildren, QueryList} from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, IonRouterOutlet, ModalController, MenuController, PopoverController, ActionSheetController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {

  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  /* get a reference to the used IonRouterOutlet 
  assuming this code is placed in the component
  that hosts the main router outlet, probably app.components */
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  public appPages = [
    // {
    //   title: 'প্রথম পাতা',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'উৎস',
    //   url: '/sources',
    //   icon: 'cube'
    // },
    // {
    //   title: 'লাইভ টিভি',
    //   url: '/livetv',
    //   icon: 'tv'
    // },
    // {
    //   title: 'আমাদের সম্পর্কে',
    //   url: '/about',
    //   icon: 'md-information-circle'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private router: Router,
    private toast: Toast,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController,
  ) {
    this.initializeApp();

    // Initialize BackButton Eevent.
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.setupPush();
      }
      if (window.statusbar) {
        this.statusBar.hide();
      }
    });
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('3eb9384e-2985-4a4b-a7f8-2c1b619230ab', '78641323676');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {

      // Just a note that the data is a different place here!
      const additionalData = data.notification.payload.additionalData;
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    this.oneSignal.endInit();
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    });
    alert.present();
  }


  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
        // close action sheet
        try {
            const element = await this.actionSheetCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close popover
        try {
            const element = await this.popoverCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close modal
        try {
            const element = await this.modalCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
            console.log(error);

        }

        // close side menua
        try {
            const element = await this.menu.getOpen();
            if (element) {
                this.menu.close();
                return;

            }

        } catch (error) {

        }

        this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();

            } else if (this.router.url === '/home') {
                if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                    // this.platform.exitApp(); // Exit from app
                    navigator['app'].exitApp(); // work in ionic 4

                } else {
                    this.toast.show(
                        `Press back again to exit App.`,
                        '2000',
                        'center')
                        .subscribe(toast => {
                            // console.log(JSON.stringify(toast));
                        });
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    });
}


}// end of class
