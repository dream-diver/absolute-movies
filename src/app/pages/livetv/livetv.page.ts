import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page'

@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.page.html',
  styleUrls: ['./livetv.page.scss'],
})
export class LivetvPage implements OnInit {

  tvChannels: any = [];

  constructor(private iab: InAppBrowser, private router: Router,public modalController: ModalController) {

    this.tvChannels = [
      // tslint:disable-next-line: indent
      { channelName: 'Ekattur TV', url: 'https://www.bioscopelive.com/en/channel/ekattur-tv', logo: 'ekattor-tv.png' },
      { channelName: 'Independent TV', url: 'https://www.bioscopelive.com/en/channel/independent-tv', logo: 'independent-tv-logo.png' },
      { channelName: 'ATN Bangla', url: 'https://www.bioscopelive.com/en/channel/atn-bangla', logo: 'atn-bangla-tv.png' },
      { channelName: 'My TV', url: 'https://www.bioscopelive.com/en/channel/my-tv', logo: 'my-tv-logo.png' },
    ];

  }

  goToChannel(url) {
    this.iab.create(url, '_self', 'location=yes')
  }

 async openModal() {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "name": "Hobbs And Shaw",
        "frame": '<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>'
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      // if (dataReturned !== null) {
      //   this.dataReturned = dataReturned.data;
      //   //alert('Modal Sent Data :'+ dataReturned);
      // }
    });
 
    return await modal.present();
  }

  // test1(){
  //   this.router.navigate(['/home'],{
  //           queryParams: this.object,
  //           });
  // }
  ngOnInit() {
  }

}
