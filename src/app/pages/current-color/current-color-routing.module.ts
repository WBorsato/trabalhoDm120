import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentColorPage } from './current-color.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentColorPageRoutingModule {}
