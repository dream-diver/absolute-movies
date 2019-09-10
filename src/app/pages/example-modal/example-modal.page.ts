import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.page.html',
  styleUrls: ['./example-modal.page.scss'],
})
export class ExampleModalPage implements OnInit {
  
  name;
  frame;
  constructor(private modalController: ModalController, private navParams: NavParams,
    private videoPlayer: VideoPlayer,private streamingMedia: StreamingMedia) { 
  }


playVideo(frame){
    this.videoPlayer.play(frame).then(() => {
     console.log('video completed');
    }).catch(err => {
     console.log(err);
    });  
}
stopPlayingVideo(){
    this.videoPlayer.close();
}


  ngOnInit() {
  	console.table(this.navParams);
    this.name = this.navParams.data.name;
    this.frame = this.navParams.data.frame;
    //this.playVideo(this.frame);
    // document.getElementById("frame").innerHTML = this.frame;
    let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
    };

    this.streamingMedia.playVideo(this.frame, options);
   
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
