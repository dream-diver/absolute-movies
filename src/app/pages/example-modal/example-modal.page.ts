import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.page.html',
  styleUrls: ['./example-modal.page.scss'],
})
export class ExampleModalPage implements OnInit {
  
  name;
  frame;
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
  	console.table(this.navParams);
    this.name = this.navParams.data.name;
    this.frame = this.navParams.data.frame;
    document.getElementById("frame").innerHTML = this.frame;
   
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
