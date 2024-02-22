import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneNumberPageRoutingModule } from './phone-number-routing.module';

import { PhoneNumberPage } from './phone-number.page';
import {HeaderComponent} from "../shared/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneNumberPageRoutingModule,
    NgOptimizedImage
  ],
    declarations: [PhoneNumberPage, HeaderComponent]
})
export class PhoneNumberPageModule {}
