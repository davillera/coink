import {Component, inject} from '@angular/core';
import {NavController} from "@ionic/angular";
@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss'],
})
export class AuthButtonsComponent{



  private navController = inject(NavController)
  constructor() { }


  onRegister() {
    this.navController.navigateForward('/phone-number');
  }
}
