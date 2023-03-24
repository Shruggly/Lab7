import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycountiesPageRoutingModule } from './mycounties-routing.module';

import { MycountiesPage } from './mycounties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycountiesPageRoutingModule
  ],
  declarations: [MycountiesPage]
})
export class MycountiesPageModule {}
