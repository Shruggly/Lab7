import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycounties',
  templateUrl: './mycounties.page.html',
  styleUrls: ['./mycounties.page.scss'],
})
export class MycountiesPage implements OnInit {

  constructor() { }

  counties: string[] = ["Carlow", "Dublin", "Kildare","Kilkenny", "Laois", "Longford", "Louth", "Meath","Offaly", "Westmeath", "Wexford", "Wicklow"];

  ngOnInit() {
  }

}
