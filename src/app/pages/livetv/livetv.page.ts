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
  movies:any=[
    {
       name:"Hobbs And Shaw",
      frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>',
      imagehtml:'<img alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" title="Fast &amp; Furious Presents: Hobbs &amp; Shaw" src="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" style="display: block;">'
    },
    {
       name:"Once Upon a Time in Hollywood",
      frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZpE7y1K-TTrl71hceLg0s-vLBh3ElKu2Tr3eKvAQbMWCnuZEqPq6FyHVCxzrZwL1Rxqmd3RpS7D-wRUJeV9y8uB1eWIH-zKuF_z8S11ToUCq0JZmPn7EgJVkmeEzVPi1yURegLpdZzVz9YRIh2xA7HCMAg==" webkitallowfullscreen="true" width="100%" __idm_frm__="136"></iframe>',
      imagehtml:'<img alt="Men in Black: International" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" title="Men in Black: International" src="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" style="display: block;">'
    },
  ];

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

 async openModal(name,frame) {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "name": name,
        "frame": frame
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
