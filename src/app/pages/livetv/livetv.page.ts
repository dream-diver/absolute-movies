import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page';



@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.page.html',
  styleUrls: ['./livetv.page.scss'],
})
export class LivetvPage implements OnInit {

  tvChannels: any = [];
  // movies:any=[
  //   {
  //      name:"Hobbs And Shaw",
  //     frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>',
  //     imagehtml:'<img alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" title="Fast &amp; Furious Presents: Hobbs &amp; Shaw" src="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" style="display: block;">'
  //   },
  //   {
  //      name:"Once Upon a Time in Hollywood",
  //     frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZpE7y1K-TTrl71hceLg0s-vLBh3ElKu2Tr3eKvAQbMWCnuZEqPq6FyHVCxzrZwL1Rxqmd3RpS7D-wRUJeV9y8uB1eWIH-zKuF_z8S11ToUCq0JZmPn7EgJVkmeEzVPi1yURegLpdZzVz9YRIh2xA7HCMAg==" webkitallowfullscreen="true" width="100%" __idm_frm__="136"></iframe>',
  //     imagehtml:'<img alt="Men in Black: International" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" title="Men in Black: International" src="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" style="display: block;">'
  //   },
  //   {
  //      name:"Judge Mental Hay Kya",
  //     frame:'<video id="my-video" type="video/x-matroska" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://ssd17.polosolo.net/MKV/mkv-bollywood/Judgementall Hai Kya 2019 preDvDRip.mkv" ></video>',
  //     imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZDBmZTZiYWUtMTQ3OS00NzA1LThjNjYtZmE3NzFhMzAzNDFmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY268_CR16,0,182,268_AL_.jpg">'
  //   },
  //   {
  //      name:"Batla House",
  //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://bolly1.polosolo.net/mkv-bollywood/Batla House 2019 Pre DvD Rip HDFriday.mkv" ></video>',
  //     imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZmI4M2I1NWYtM2MwNS00NDJmLThhMmMtNDk1MzM4ZWQyMDZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg">'
  //   },
  //   {
  //      name:"Student of the Year 2 2019",
  //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://s24.hubfiles.club:182/d/hxh3t7eiurvhkjtugb5euvkhjegy6ozo2niddcssmytlngiozvpto7ye2f6yykwdwsc3yozd/Student%20of%20the%20Year%202%20(2019)%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AC3%20ESub.mkv" ></video>',
  //     imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Ag-GUouK_GI/XNeC4ignwOI/AAAAAAAAPuU/B1Ww9D-ad307-YFQbc2Y9Wq-A4YhpOg0wCLcBGAs/s1600/student.jpg">'
  //   },    
  //   {
  //      name:"Super 30",
  //     frame:'<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" data-setup="{}"><source src="http://www4.uptobox.com/dl/sj6Eeph9CGs8Y_s9Zwl6XSqBhwXqaPBJ1V5qavhDQ6PMC64pgO1BWLzDfbQydWprg8lFD3BfRjwrR80qBQrjpASsmckX-mVl8-U6i6t7XnSZ8PurLQRyNwMTAKc3x_QJ3Ifp5xhpOJ7JOz0QxZ4uVA/Super%2030%20%282019%29%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AAC%20ESub.mkv" ></video>',
  //     imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Jc0950DSumU/XSjXNJdCIII/AAAAAAAAR28/J_r5YO8csHw4IKBQ3XW46FfqBOC3fGCeQCLcBGAs/s1600/sup.jpg">'
  //   },      
  // ];

  movies:any=[
    // {
    //    name:"Hobbs And Shaw",
    //   frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZiMY9sTslWsBed8930qK3swQ2nl2YmMYgbkcoFM2Z8rHGF3xcWg5Snd9ZKrJ-dUwcn4OJsCNbiD-CxPSPyre08xEhfY01r8WCESDvHGEOyd5jIq1PIy7QuxpSgLGjpAkZRe_CCTWogxXEET7RYqj2bvZHA==" webkitallowfullscreen="true" width="100%" __idm_frm__="130"></iframe>',
    //   imagehtml:'<img alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" title="Fast &amp; Furious Presents: Hobbs &amp; Shaw" src="https://img.voxzer.org/poster/29103/Fast-Furious-Presents-Hobbs-Shaw-29103-200.jpg" style="display: block;">'
    // },
    // {
    //    name:"Once Upon a Time in Hollywood",
    //   frame:'<iframe allowfullscreen="true" frameborder="0" height="500" id="iframe-embed" mozallowfullscreen="true" scrolling="no" src="https://play.voxzer.org/watch?v=gAAAAABdZpE7y1K-TTrl71hceLg0s-vLBh3ElKu2Tr3eKvAQbMWCnuZEqPq6FyHVCxzrZwL1Rxqmd3RpS7D-wRUJeV9y8uB1eWIH-zKuF_z8S11ToUCq0JZmPn7EgJVkmeEzVPi1yURegLpdZzVz9YRIh2xA7HCMAg==" webkitallowfullscreen="true" width="100%" __idm_frm__="136"></iframe>',
    //   imagehtml:'<img alt="Men in Black: International" class="thumb mli-thumb lazy" data-original="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" title="Men in Black: International" src="https://img.voxzer.org/poster/28803/men-in-black-international-28803-200.jpg" style="display: block;">'
    // },
    {
       name:"Judge Mental Hay Kya",
      frame:"http://ssd17.polosolo.net/MKV/mkv-bollywood/Judgementall Hai Kya 2019 preDvDRip.mkv",
      imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZDBmZTZiYWUtMTQ3OS00NzA1LThjNjYtZmE3NzFhMzAzNDFmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY268_CR16,0,182,268_AL_.jpg">'
    },
    {
       name:"Batla House",
      frame:"http://bolly1.polosolo.net/mkv-bollywood/Batla House 2019 Pre DvD Rip HDFriday.mkv",
      imagehtml:'<img alt="" src="https://m.media-amazon.com/images/M/MV5BZmI4M2I1NWYtM2MwNS00NDJmLThhMmMtNDk1MzM4ZWQyMDZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg">'
    },
    {
       name:"Student of the Year 2 2019",
      frame:"http://s24.hubfiles.club:182/d/hxh3t7eiurvhkjtugb5euvkhjegy6ozo2niddcssmytlngiozvpto7ye2f6yykwdwsc3yozd/Student%20of%20the%20Year%202%20(2019)%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AC3%20ESub.mkv",
      imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Ag-GUouK_GI/XNeC4ignwOI/AAAAAAAAPuU/B1Ww9D-ad307-YFQbc2Y9Wq-A4YhpOg0wCLcBGAs/s1600/student.jpg">'
    },    
    {
       name:"Super 30",
      frame:"http://www4.uptobox.com/dl/sj6Eeph9CGs8Y_s9Zwl6XSqBhwXqaPBJ1V5qavhDQ6PMC64pgO1BWLzDfbQydWprg8lFD3BfRjwrR80qBQrjpASsmckX-mVl8-U6i6t7XnSZ8PurLQRyNwMTAKc3x_QJ3Ifp5xhpOJ7JOz0QxZ4uVA/Super%2030%20%282019%29%20%5BWorldfree4u.Wiki%5D%20%5BHindi%5D%20720p%20HDRip%20x264%20AAC%20ESub.mkv",
      imagehtml:'<img alt="" src="https://1.bp.blogspot.com/-Jc0950DSumU/XSjXNJdCIII/AAAAAAAAR28/J_r5YO8csHw4IKBQ3XW46FfqBOC3fGCeQCLcBGAs/s1600/sup.jpg">'
    },      
  ];
  constructor(private iab: InAppBrowser, private router: Router,public modalController: ModalController) {
    // this.playVideo();
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
