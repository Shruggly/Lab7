import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycountiesPage } from './mycounties.page';

const routes: Routes = [
  {
    path: '',
    component: MycountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycountiesPageRoutingModule {}
