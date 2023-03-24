import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
})
export class UlsterPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  onButtonClick() {
    this.navCtrl.navigateForward('/mycounties')
  }

  ngOnInit() {
  }

}
