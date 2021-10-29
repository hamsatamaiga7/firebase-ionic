import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OubliemotdepassePage } from './oubliemotdepasse.page';

const routes: Routes = [
  {
    path: '',
    component: OubliemotdepassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OubliemotdepassePageRoutingModule {}
