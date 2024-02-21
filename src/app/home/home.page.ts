import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private navController = inject(NavController)

  constructor() {}

  ngOnInit(): void {
    this.redirectToSignUp();
  }

  redirectToSignUp(){
    setTimeout(() => {
      this.navController.navigateForward('/income');
    }, 3000); 
  }

}
