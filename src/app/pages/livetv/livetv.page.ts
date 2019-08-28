import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.page.html',
  styleUrls: ['./livetv.page.scss'],
})
export class LivetvPage implements OnInit {

  tvChannels: any = [];

  constructor(private iab: InAppBrowser, ) {

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

  ngOnInit() {
  }

}
