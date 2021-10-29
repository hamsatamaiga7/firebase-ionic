import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OubliemotdepassePageRoutingModule } from './oubliemotdepasse-routing.module';

import { OubliemotdepassePage } from './oubliemotdepasse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OubliemotdepassePageRoutingModule
  ],
  declarations: [OubliemotdepassePage]
})
export class OubliemotdepassePageModule {}
