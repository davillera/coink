import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import {MainAuthComponent} from "./main-auth/main-auth.component";
import {AuthButtonsComponent} from "./auth-buttons/auth-buttons.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [
    AuthPage,
    MainAuthComponent,
    AuthButtonsComponent
  ]
})
export class AuthPageModule {}
